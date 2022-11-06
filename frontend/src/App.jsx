import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Talk Valley</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/compare?productIds=63679273b8a6246c709b0463&productIds=636792d7b8a6246c709b0464">
          Compare
        </Link>
      </nav>
    </div>
  );
}

export default App;
