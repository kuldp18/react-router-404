import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button style={{ margin: '10px' }}>
        <Link to="/contact">Contact</Link>
      </button>
      <button>
        <Link to="/team">Team</Link>
      </button>
    </div>
  );
};

export default Home;
