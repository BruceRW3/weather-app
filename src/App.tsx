import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location <input type="text" value="Irmo" />
        </label>
        <button>Search</button>
      </div>

      <div>
        <h2>Locations</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Knoxville</td></tr>
            <tr><td>Greensboro</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
