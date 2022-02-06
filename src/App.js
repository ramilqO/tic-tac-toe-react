import React from 'react'
import "./App.css"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      squares: Array(9).fill(null)
    }
    
    this.winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
    ]
  }

  isWinner = () => {
    //isWinner() check what symbol was wrote in and check win state
    let clickedElement = (this.state.count % 2 === 0) ? 'X' : 'O';
      for(let i = 0; i < 8; i++) {
        let line = this.winnerLine[i];

        if (this.state.squares[line[0]] === clickedElement
          && this.state.squares[line[1]] === clickedElement
          && this.state.squares[line[2]] === clickedElement) {alert(clickedElement + ' ' + 'win')}
      }
  }

  clickHandler = event => {
    //data is a number of a square that have clicked
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;

    if(currentSquares[data] === null) { 
    currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
    this.setState({count: this.state.count  + 1});
    this.setState({squares: currentSquares});
  }

    else {return false}

      this.isWinner();
  }

  cleanSquares = () => {
    this.setState({
      squares: Array(9).fill(null)
    })
  }

  render() {
    return (
        <div className='tic-tac-toe'>
          <div className='ttt-grid' onClick={this.clickHandler} data='0'>{this.state.squares[0]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='1'>{this.state.squares[1]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='2'>{this.state.squares[2]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='3'>{this.state.squares[3]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='4'>{this.state.squares[4]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='5'>{this.state.squares[5]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='6'>{this.state.squares[6]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='7'>{this.state.squares[7]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='8'>{this.state.squares[8]}</div>
          <button className='clean' onClick={this.cleanSquares}>Clean</button>
        </div>
      );
  }
}
