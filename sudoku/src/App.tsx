import React from 'react';
import './App.css';

function App() {
  return (
    <div className="home">
      <header className="homeHeader">
        <h1 >Sudoku</h1>
        <hr className="line"></hr>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th> Row 1</th>
            <th> Row 2 </th>
            <th> Row 3 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1, 1</td>
            <td>1, 2</td>
            <td>1, 3</td>
          </tr>
          <tr>
            <td>2, 1</td>
            <td>2, 2</td>
            <td>2, 3</td>
          </tr>
          <tr>
            <td>3, 1</td>
            <td>3, 2</td>
            <td>3, 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
