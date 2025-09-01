cd ~/f25_Tournament_Runner/submissions/
python calculate_elo.py
cp tournament_elo_rankings.json ~/f25-website/public/results.json
cd ~/f25-website
git add public/results.json
git commit -m "update"
# git push