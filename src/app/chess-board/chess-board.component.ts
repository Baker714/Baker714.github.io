import { Component, OnInit } from '@angular/core';
import { ChessPiece } from  './chess-piece';
import { ChessSquareComponent } from './chess-square/chess-square.component';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
  squares: any[];
  winner: string;
  color1: string = "grey";
  color2: string = "white";
  bQueen: ChessPiece;
  bKing: ChessPiece;
  bRook: ChessPiece;
  bKnight: ChessPiece;
  bBishop: ChessPiece;
  bPawn: ChessPiece;
  wQueen: ChessPiece;
  wKing: ChessPiece;
  wRook: ChessPiece;
  wKnight: ChessPiece;
  wBishop: ChessPiece;
  wPawn: ChessPiece;

  ngOnInit() {
    this.bQueen = new ChessPiece("Q".fontcolor("black"));
    this.bKing = new ChessPiece("K");
    this.bRook = new ChessPiece("R");
    this.bKnight = new ChessPiece("N");
    this.bBishop = new ChessPiece("B");
    this.bPawn = new ChessPiece("P");
    this.wQueen = new ChessPiece("Q");
    this.wKing = new ChessPiece("K");
    this.wRook = new ChessPiece("R");
    this.wKnight = new ChessPiece("N");
    this.wBishop = new ChessPiece("B");
    this.wPawn = new ChessPiece("P");
    this.newGame();
    this.fillBoard();
  }

  newGame(){
    this.squares = Array(8).fill(Array(8).fill(new ChessSquareComponent()));
    this.winner = null;
    this.fillBoard();
  }

  makeMove(idx: number, val: ChessPiece){
    //highlight available moves, wait for player to click once
    var openSquare = new ChessPiece("?");
    var moves = val.moves;
    var squares = this.squares;
    var moveOption = 0;
    moves.forEach(function(value, index, array){

      if(val.continuous == false)
      {
        moveOption = idx - value[0];
        if(moveOption)
           moveOption = idx - value[1];
        if(moveOption)
          squares.splice(moveOption, 1, openSquare);
      }

    });
  }

  get player(){
    return;
  }

  calculateWinner(){

  }

  fillBoard(){
    var bQueen = new ChessPiece("Q");
    var bKing = new ChessPiece("K");
    var bRook = new ChessPiece("R");
    var bKnight = new ChessPiece("N");
    var bBishop = new ChessPiece("B");
    var bPawn = new ChessPiece("P");
    var wQueen = new ChessPiece("Q");
    var wKing = new ChessPiece("K");
    var wRook = new ChessPiece("R");
    var wKnight = new ChessPiece("N");
    var wBishop = new ChessPiece("B");
    var wPawn = new ChessPiece("P");
    this.bQueen = bQueen;
    this.bKing = bKing;
    this.bRook = bRook;
    this.bKnight = bKnight;
    this.bBishop = bBishop;
    this.bPawn = bPawn;
    this.wQueen = wQueen;
    this.wKing = wKing;
    this.wRook = wRook;
    this.wKnight = wKnight;
    this.wBishop = wBishop;
    this.wPawn = wPawn;

    this.squares.forEach(fillTheBoard);

    function fillTheBoard(value, index, array){
      if((0 == index)){
        array.splice(index, 8, bRook, bKnight, bBishop, bQueen, bKing, bBishop, bKnight, bRook);
      }
      else if((8 <= index && index <= 15) || (48 <= index && index <= 55)){
        array.splice(index, 1, bPawn);
      }

      if((56 == index)){
        array.splice(index, 8, wRook, wKnight, wBishop, wQueen, wKing, wBishop, wKnight, wRook);
      }
      else if((48 <= index && index <= 55)){
        array.splice(index, 1, wPawn);
      }
    }
  }

  getColor(idx: number) : string
  {
    var temp:string = "";

    if((idx%8) == 0)
    {
      temp = this.color1;
      this.color1 = this.color2;
      this.color2 = temp;
    }

    if((idx%2) == 0)
    {
      return this.color1;
    }

    return this.color2;
  }
}
