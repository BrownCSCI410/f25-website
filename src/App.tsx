import React from 'react';
import { Navbar } from './Components/NavBar/Navbar';
import { Welcome } from './Components/Welcome/Welcome';
import { Assignments } from './Components/Assignments/Assignments';
import { Lectures } from './Components/Lectures/Lectures';
import { Labs } from './Components/Labs and Sections/Labs';
import { Hours } from './Components/Hours/Hours';
import { Resources } from './Components/Resources/Resources';
import { Staff } from './Components/Staff/Staff';
import { TournamentResults } from './Components/TournamentResults/TournamentResults';
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import { Glossary } from './Components/Glossary/glossary';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          <Route path="labs" element={<Labs />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="resources" element={<Resources />} />
          <Route path="hours" element={<Hours />} />
          <Route path="staff" element={<Staff />} />
          <Route path="glossary" element={<Glossary />} />
          
        </Routes>
      </main>
    </div>
  );
}

