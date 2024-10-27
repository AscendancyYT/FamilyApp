import React, { useState } from 'react';
import axios from 'axios';

const DinnerPlans = ({ userRole }) => {
  const [dinnerPlan, setDinnerPlan] = useState('');

  const setDinner = async () => {
    let plan = '';
    if (userRole === 'mom') {
      plan = "We're having home-cooked dinner tonight!";
    } else if (userRole === 'dad') {
      plan = "We're eating out tonight!";
    }
    try {
      const response = await axios.post('http://localhost:5000/api/dinner', { plan });
      setDinnerPlan(response.data.plan);
    } catch (error) {
      console.error('Error setting dinner plan:', error);
    }
  };

  return (
    <div className="container protected-content">
      <h2>Dinner Plans</h2>
      {userRole == 'mom' && <button onClick={setDinner}>Set Home Dinner</button>}
      {userRole == 'dad' && <button onClick={setDinner}>Set Eating Out</button>}
      <p>{dinnerPlan}</p>
    </div>
  );
};

export default DinnerPlans;
