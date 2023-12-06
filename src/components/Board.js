// 03. 과거의 이동 표시하기(map 메소드)10:09









// 01. 동작에 대한 기록 저장하기25:27
import Square from './Square';
import "./Board.css";

//Board 컴퍼넌트는 Square 컴퍼넌트의 부모 컴퍼넌트
const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
    return <Square value={squares[i]} 
                   onClick={() => onClick(i)} />
  }

  return (
    <div className='board-wrapper'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )  
}
export default Board









// 04. 승자 결정하기17:26
// import React, { useState } from 'react';
// import Square from './Square';
// import "./Board.css";

// //Board 컴퍼넌트는 Square 컴퍼넌트의 부모 컴퍼넌트
// const Board = () => {

//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

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
//     console.log('squares : ' , squares)
//     return null;
//   }
//   const winner = calculateWiner(squares);
//   let status;
//   if(winner) {
//     status = 'Winner : ' + winner;
//   } else {
//     status = `Next player: ${xIsNext ? 'X' : 'O'}`;
//   }

//   const handleClick = (i) => {
//     const newSquares = squares.slice();

//     if(calculateWiner(newSquares) || newSquares[i]) {
//       return;
//     }

//     newSquares[i] = xIsNext ? 'X' : 'O';
//     setSquares(newSquares);
//     setXIsNext(prev => !prev); // 또는 // setXIsNext(!xIsNext);
//   }

//   const renderSquare = (i) => {
//     return <Square value={squares[i]} 
//                     onClick={() => handleClick(i)} />
//   }

//   return (
//     <div>
//       <div className='status'>{status}</div>
//       <div className='board-row'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   )  
// }
// export default Board









// export default class Board extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null)
//     }
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     console.log('squares :' , squares);
//     squares[i] = 'X';
//     console.log('i: ', i , 'squares[i] : ' , squares[i])
//     this.setState({ squares: squares });
//   }

//   renderSquare(i) {
//     return <Square value={this.state.squares[i]} 
//                    onClick={() => this.handleClick(i)}
//             />
//   }

//   render() {
//     return (
//       <div>
//         <div className='status'>Next Player: X,O</div>
//         <div className='board-row'>
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }
