import React from "react";
import "./style.css";
import firstBadge from '../../../src/assets/first_solo.png';
import secondBadge from '../../../src/assets/second_solo.png';
import thirdBadge from '../../../src/assets/third_solo.png';

const leaderboardData = [
    { rank: 1, name: "Cyborg", xp: 123, tier: 50 },
    { rank: 2, name: "Luna", xp: 123, tier: 50 },
    { rank: 3, name: "Hex", xp: 123, tier: 50 },
    { rank: 4, name: "Hex_wizard", xp: 123, tier: 50 },
    { rank: 5, name: "deca_mon", xp: 123, tier: 50 },
    { rank: 6, name: "Hex", xp: 123, tier: 50 },
  ];
  
  function Solo_leadboard() {
    return (
      <div className="leaderboard-container">
        <h2 className="leaderboard-title">Solo Leaderboard</h2>
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
            {leaderboardData.slice(0, 5).map((item) => (
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
  
  export default Solo_leadboard;
  