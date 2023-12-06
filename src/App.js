// 05. JumpTo 함수 작성하기16:44
import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {

  // 자식 Board.js의 state를 부모 App.js 컴포넌트로 옮겨주기
  const [history, setHistory] = useState([ {squares: Array(9).fill(null)} ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  // 자식 Board.js의 Winner 상태와 계산하는 함수도
  //    App 컴포넌트로 이동시켜주기
  const calculateWiner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index];
      if (squares[a] 
          && squares[a] === squares[b] 
          && squares[a] === squares[c]) {
        console.log(squares[a])
        return squares[a];
      }
    }
    return null;
  }

  // 현재상태 데이터 추가
  //const current = history[history.length - 1];
  const current = history[stepNumber];
  const winner = calculateWiner(current.squares);

  let status;
  if(winner) {
    status = 'Winner : ' + winner;
  } else {
    // eslint-disable-next-line no-unused-vars
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  // App 컴포넌트로 handleClick 함수 이동하기
  const handleClick = (i) => {
    console.log('in handleClick');

    const newHistory = history.slice(0, stepNumber + 1);
    // console.log('newHistory : ' , newHistory);

    const newCurrent = newHistory[newHistory.length - 1];
    console.log('newCurrent : ' , newCurrent);

    const newSquares = newCurrent.squares.slice();
    console.log('newSquares : ' , newSquares);

    if(calculateWiner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext(pre => !pre); 

    setStepNumber(newHistory.length);
  }

  // map() 함수를 이용해서 history 배열에 있는 것들을 하나씩 나열해주기
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  })

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  // App 컴포넌트에 있는 함수와 State를 Board 컴포넌트에 내려주기
  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol style={{listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;









// 03. 과거의 이동 표시하기(map 메소드)10:09
// import { useState } from 'react';
// import './App.css';
// import Board from './components/Board';

// function App() {

//   // 자식 Board.js의 state를 부모 App.js 컴포넌트로 옮겨주기
//   const [history, setHistory] = useState([ {squares: Array(9).fill(null)} ]);
//   const [xIsNext, setXIsNext] = useState(true);

//   // 자식 Board.js의 Winner 상태와 계산하는 함수도
//   //    App 컴포넌트로 이동시켜주기
//   const calculateWiner = (squares) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ]
//     for (let index = 0; index < lines.length; index++) {
//       const [a,b,c] = lines[index];
//       if (squares[a] 
//           && squares[a] === squares[b] 
//           && squares[a] === squares[c]) {
//         console.log(squares[a])
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   // 현재상태 데이터 추가
//   const current = history[history.length - 1];
//   const winner = calculateWiner(current.squares);

//   let status;
//   if(winner) {
//     status = 'Winner : ' + winner;
//   } else {
//     // eslint-disable-next-line no-unused-vars
//     status = `Next player: ${xIsNext ? 'X' : 'O'}`;
//   }

//   // App 컴포넌트로 handleClick 함수 이동하기
//   const handleClick = (i) => {
//     const newSquares = current.squares.slice();
//     if(calculateWiner(newSquares) || newSquares[i]) {
//       return;
//     }

//     newSquares[i] = xIsNext ? 'X' : 'O';
//     setHistory([...history, { squares: newSquares }]);
//     setXIsNext(pre => !pre); 
//     // setXIsNext(current => !current);
//   }

//   // map() 함수를 이용해서 history 배열에 있는 것들을 하나씩 나열해주기
//   const moves = history.map((step, move) => {
//     const desc = move ? 'Go to move #' + move : 'Go to game start';
//     return (
//       <li key={move}>
//         {/* <button onClick={() => jumpTo(move)}>{desc}</button> */}
//         <button>{desc}</button>
//       </li>
//     );

//   });

//   // App 컴포넌트에 있는 함수와 State를 Board 컴포넌트에 내려주기
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board 
//           squares={current.squares}
//           onClick={(i) => handleClick(i)}
//         />
//       </div>
//       <div className="game-info">
//         <div>{status}</div>
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// export default App;








// 01. 동작에 대한 기록 저장하기25:27
// import { useState } from 'react';
// import './App.css';
// import Board from './components/Board';

// function App() {

//   // 자식 Board.js의 state를 부모 App.js 컴포넌트로 옮겨주기
//   const [history, setHistory] = useState([ {squares: Array(9).fill(null)} ]);
//   const [xIsNext, setXIsNext] = useState(true);

//   // 자식 Board.js의 Winner 상태와 계산하는 함수도
//   //    App 컴포넌트로 이동시켜주기
//   const calculateWiner = (squares) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ]
//     for (let index = 0; index < lines.length; index++) {
//       const [a,b,c] = lines[index];
//       if (squares[a] 
//           && squares[a] === squares[b] 
//           && squares[a] === squares[c]) {
//         console.log(squares[a])
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   // 현재상태 데이터 추가
//   const current = history[history.length - 1];
//   const winner = calculateWiner(current.squares);

//   let status;
//   if(winner) {
//     status = 'Winner : ' + winner;
//   } else {
//     // eslint-disable-next-line no-unused-vars
//     status = `Next player: ${xIsNext ? 'X' : 'O'}`;
//   }

//   // App 컴포넌트로 handleClick 함수 이동하기
//   const handleClick = (i) => {
//     const newSquares = current.squares.slice();
//     if(calculateWiner(newSquares) || newSquares[i]) {
//       return;
//     }

//     newSquares[i] = xIsNext ? 'X' : 'O';
//     setHistory([...history, { squares: newSquares }]);
//     setXIsNext(pre => !pre); 
//     // setXIsNext(current => !current);
//   }

//   // App 컴포넌트에 있는 함수와 State를 Board 컴포넌트에 내려주기
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board 
//           squares={current.squares}
//           onClick={(i) => handleClick(i)}
//         />
//       </div>
//       <div className="game-info">
//         game-info
//       {/* <div className='status'></div> */}
//       </div>
//     </div>
//   );
// }

// export default App;









// import './App.css';
// import Board from './components/Board';

// function App() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//       <div className="game-info">
//         game-info
//       </div>
//     </div>
//   );
// }

// export default App;