/* eslint-disable */
// The above comment disables all ESLint rules for this file
import React, { useState, useEffect } from 'react';
import './TournamentResults.scss';

// Define the structure of our JSON data
interface ResultsData {
  ratings: {
    [id: string]: {
      rating: number;
      games: number;
      wins: number;
      losses: number;
      name: string;
    }
  };
  agent_names: {
    [id: string]: string;
  };
}

interface Bot {
  id: string;
  name: string;
  wins: number;
  losses: number;
  games: number;
  rating: number;
}

type SortField = 'name' | 'id' | 'wins' | 'losses' | 'rating';
type SortDirection = 'asc' | 'desc';

interface MatchData {
  [agentId: string]: {
    [opponentId: string]: number | null;
  };
}

export const TournamentResults: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('5x5');
  const [bots, setBots] = useState<{[key: string]: Bot[]}>({ '5x5': [], '9x9': [] });
  const [matchData, setMatchData] = useState<{[key: string]: MatchData}>({ '5x5': {}, '9x9': {} });
  const [loading, setLoading] = useState<{[key: string]: boolean}>({ '5x5': true, '9x9': true });
  const [error, setError] = useState<{[key: string]: string | null}>({ '5x5': null, '9x9': null });
  const [sortField, setSortField] = useState<SortField>('rating');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const fetchDataForBoardSize = async (boardSize: string) => {
    try {
      setLoading(prev => ({ ...prev, [boardSize]: true }));
      // Use the correct base path for the public directory
      const basePath = process.env.PUBLIC_URL || '/f25-website';
      
      // Fetch data files for this board size
      const [mainResponse, matchesResponse] = await Promise.all([
        fetch(`${basePath}/results_${boardSize}.json`),
        fetch(`${basePath}/top32_matches_${boardSize}.csv`)
      ]);
      
      if (!mainResponse.ok) {
        throw new Error(`Failed to fetch ${boardSize} main results`);
      }
      
      // Parse JSON file
      const mainData: ResultsData = await mainResponse.json();
      let csvText = '';
      
      if (matchesResponse.ok) {
        csvText = await matchesResponse.text();
      }

      // Parse CSV data
      const matchData: MatchData = {};
      if (csvText) {
        const rows = csvText.split('\n').map(row => row.split(','));
        const headers = rows[0].slice(1); // Skip first empty cell
        
        // Process match data
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const agentId = row[0];
          if (!agentId) continue;
          
          matchData[agentId] = {};
          for (let j = 1; j < row.length; j++) {
            const score = row[j];
            if (score === '' || score === 'ERROR') {
              matchData[agentId][headers[j-1]] = null;
            } else {
              matchData[agentId][headers[j-1]] = parseFloat(score);
            }
          }
        }
      }
        
      // Process bot data
      const processedBots: Bot[] = Object.entries(mainData.ratings).map(([id, stats]) => ({
        id,
        name: stats.name || mainData.agent_names[id as keyof typeof mainData.agent_names] || `Unknown Bot ${id}`,
        wins: stats.wins,
        losses: stats.losses,
        games: stats.games,
        rating: Math.round(stats.rating)
      }));

      setBots(prev => ({ ...prev, [boardSize]: processedBots }));
      setMatchData(prev => ({ ...prev, [boardSize]: matchData }));
      setLoading(prev => ({ ...prev, [boardSize]: false }));
      setError(prev => ({ ...prev, [boardSize]: null }));
    } catch (err) {
      console.error(`Error loading ${boardSize} tournament data:`, err);
      setError(prev => ({ ...prev, [boardSize]: err instanceof Error ? err.message : 'Unknown error' }));
      setLoading(prev => ({ ...prev, [boardSize]: false }));
    }
  };
  
  useEffect(() => {
    // Fetch data for both board sizes
    fetchDataForBoardSize('5x5');
    fetchDataForBoardSize('9x9');
  }, []);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const currentBots = bots[activeTab] || [];
  const currentMatchData = matchData[activeTab] || {};
  const currentLoading = loading[activeTab] || false;
  const currentError = error[activeTab] || null;

  const sortedBots = [...currentBots].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    if (sortField === 'name') {
      return multiplier * a.name.localeCompare(b.name);
    } else if (sortField === 'id') {
      return multiplier * a.id.localeCompare(b.id);
    } else {
      return multiplier * (a[sortField] - b[sortField]);
    }
  });

  const getScoreColor = (score: number | null | string | undefined): string => {
    if (score === null || score === 'ERROR' || score === undefined) return '#666'; // Gray for no match/error
    if (score === 0) return '#808080'; // Darker gray for draws
    const maxScore = 10; // Maximum score difference for color scaling
    const normalizedScore = Math.max(-maxScore, Math.min(maxScore, score as number)) / maxScore;
    if (normalizedScore > 0) {
      // Green for wins, intensity based on score
      const intensity = Math.abs(normalizedScore);
      return `rgba(76, ${Math.round(175 + (80 * (1 - intensity)))}, 80, ${0.5 + (0.5 * intensity)})`;
    } else {
      // Red for losses, intensity based on score
      const intensity = Math.abs(normalizedScore);
      return `rgba(244, ${Math.round(67 + (188 * (1 - intensity)))}, 54, ${0.5 + (0.5 * intensity)})`;
    }
  };

  const renderHeatmap = () => {
    // Use all available bots for the heatmap
    const topBots = [...currentBots]
      .sort((a, b) => b.rating - a.rating);

    if (topBots.length === 0) {
      return <div className="heatmap-container"><p>No match data available for heatmap.</p></div>;
    }

    // Create a map of bot IDs to names for easy lookup
    const botNameMap = new Map(topBots.map(bot => [bot.id, bot.name]));

    // Create a map of bot IDs to their match results
    const matchResults = new Map<string, Map<string, number | string | null>>(
      topBots.map(bot => [
        bot.id,
        new Map<string, number | string | null>(
          topBots.map(opponent => {
            const botMatches = currentMatchData[bot.id];
            if (!botMatches) return [opponent.id, null];
            
            const score = botMatches[opponent.id];
            if (score === null) return [opponent.id, null];
            if (typeof score === 'string') return [opponent.id, 'ERROR'];
            return [opponent.id, -score];
          })
        )
      ])
    );

    return (
      <div className="heatmap-container">
        <h3>Match Results Heatmap ({topBots.length} Agents, {activeTab} Board)</h3>
        <div className="heatmap">
          <table>
            <thead>
              <tr>
                <th></th>
                {topBots.map(bot => (
                  <th key={bot.id} title={`ID: ${bot.id}`}>
                    <span>{bot?.name || 'Unknown'}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topBots.map(bot => (
                <tr key={bot.id}>
                  <th title={`ID: ${bot.id}`}>{bot?.name || 'Unknown'}</th>
                  {topBots.map(opponent => {
                    const score = matchResults.get(bot.id)?.get(opponent.id);
                    const cellColor = getScoreColor(score);

                    return (
                      <td
                        key={opponent.id}
                        style={{ backgroundColor: cellColor }}
                        title={`${bot?.name || 'Unknown'} vs ${opponent?.name || 'Unknown'}: ${
                          score === null ? 'No match' :
                          score === 'ERROR' ? 'Error' :
                          score === 0 ? 'Draw' :
                          typeof score === 'number' ? 
                            `${score > 0 ? 'Win' : 'Loss'} by ${Math.abs(score)}` :
                          'Unknown'
                        }`}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="heatmap-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: 'rgba(76, 175, 80, 1)' }}></div>
            <span>Strong Win</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: 'rgba(244, 67, 54, 1)' }}></div>
            <span>Strong Loss</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#808080' }}></div>
            <span>Draw</span>
          </div>
        </div>
      </div>
    );
  };

  if (currentLoading) {
    return <div className="tournament-results">Loading {activeTab} tournament results...</div>;
  }

  if (currentError) {
    return <div className="tournament-results">Error loading {activeTab} results: {currentError}</div>;
  }

  const renderTable = (bots: Bot[]) => {
    return (
      <table>
        <thead>
          <tr>
            <th className="rank-column">#</th>
            <th onClick={() => handleSort('name')} className="sortable">
              Agent Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('id')} className="sortable">
              ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('wins')} className="sortable">
              Win Percentage {sortField === 'wins' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('rating')} className="sortable">
              ELO Rating {sortField === 'rating' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {bots.filter(bot => bot.id !== '3199411').map((bot, index) => (
            <tr key={`${bot.id}-${bot.name}`}>
              <td>{index + 1}</td>
              <td>{bot.name}</td>
              <td>{bot.id}</td>
              <td>{bot.games > 0 ? (bot.wins / bot.games * 100).toFixed(1) + '%' : 'N/A'}</td>
              <td>{bot.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div id="Final Project Results" className="tournament-results">
      <h2>Final Tournament Results!</h2>
      
      <div className="board-size-tabs">
        <button 
          className={`tab-button ${activeTab === '5x5' ? 'active' : ''}`} 
          onClick={() => setActiveTab('5x5')}
        >
          5x5 Board
        </button>
        <button 
          className={`tab-button ${activeTab === '9x9' ? 'active' : ''}`} 
          onClick={() => setActiveTab('9x9')}
        >
          9x9 Board
        </button>
      </div>
      
      <div className="tournament-section">
        <h3>Tournament Results ({activeTab} Board)</h3>
        {currentBots.length === 0 ? (
          <p>No tournament results available for {activeTab}.</p>
        ) : (
          renderTable(sortedBots)
        )}
      </div>
      
      {Object.keys(currentMatchData).length > 0 && renderHeatmap()}
    </div>
  );
}