import React, { useState } from 'react';

const Achievements = ({ userRole }) => {
  const [achievements, setAchievements] = useState([]);

  if (userRole !== 'child') {
    return <p>You don't have permission to view achievements.</p>;
  }

  const pinAchievement = () => {
    const newAchievement = `Achievement ${achievements.length + 1}`;
    setAchievements([...achievements, newAchievement]);
  };

  return (
    <div className="container protected-content">
      <h2>Achievements</h2>
      <p>Pin your achievements here!</p>
      <button onClick={pinAchievement}>Pin Achievement</button>
      <ul>
        {achievements.map((ach, index) => (
          <li key={index}>{ach}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
