import React from 'react';
import "./style.css";
import firstBadge from '../../../src/assets/first_team.png';
import secondBadge from '../../../src/assets/second_team.png';
import thirdBadge from '../../../src/assets/third_team.png';


const teamLeaderboardData = [
    { rank: 1, name: "Team Cyborg", xp: 123, tier: 50 },
    { rank: 2, name: "Team Luna", xp: 123, tier: 50 },
    { rank: 3, name: "Team Hex", xp: 123, tier: 50 },
    { rank: 4, name: "Team Hex_wizard", xp: 123, tier: 50 },
    { rank: 5, name: "Team deca_mon", xp: 123, tier: 50 },
    { rank: 6, name: "Team Hex", xp: 123, tier: 50 },
  ];

function Team_leadboard() {
    return (
        <div className="leaderboard-container-team">
          <h2 className="leaderboard-title">Team Leaderboard</h2>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>XP</th>
                <th>Tier</th>
              </tr>
            </thead>
            <tbody>
              {teamLeaderboardData.slice(0, 5).map((item) => (
                <tr key={item.rank}>
                  <td>
                    {item.rank === 1 && <img src={firstBadge} alt="First Badge" />}
                    {item.rank === 2 && <img src={secondBadge} alt="Second Badge" />}
                    {item.rank === 3 && <img src={thirdBadge} alt="Third Badge" />}
                    {item.rank > 3 && item.rank}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.xp}</td>
                  <td>{item.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Team_leadboard