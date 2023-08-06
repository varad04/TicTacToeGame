import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const nextPlayer = isXNext ? 'X' : 'O';

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) {
      return;
    }

    setSquares(cuurentSquares => {
      return cuurentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>Next player is {nextPlayer}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
