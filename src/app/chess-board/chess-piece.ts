export class ChessPiece {
  piece: string;
  moves = [];
  takeMoves = [];
  continuous: boolean = false;
  hasBeenMoved: boolean = false;
  emptySpace: boolean = false;
  constructor(piece: string){
    this.piece = piece;
    switch(this.piece){
      case "Q":
        this.moves = [[0, 8], [1, 8], [1, 0]];
        this.takeMoves = [[0, 8], [1, 8], [1, 0]];
        this.continuous = true;
        break;
      case "K":
        this.moves = [[0, 8], [1, 8], [1, 0]];
        this.takeMoves = [[0, 8], [1, 8], [1, 0]];
        break;
      case "R":
        this.moves = [[0, 8], [1, 0]];
        this.takeMoves = [[0, 8], [1, 0]];
        this.continuous = true;
        break;
      case "N":
        this.moves = [[3, 8], [1, 24]];
        this.takeMoves = [[3, 8], [1, 24]];
        break;
      case "B":
        this.moves = [[1, 8]];
        this.takeMoves = [[1, 8]];
        this.continuous = true;
        break;
      case "P":
        this.moves = [[0, 8], [0, 16]];
        this.takeMoves =  [[1, 8]];
        break;
      default:
        this.emptySpace = true;
        break;
    }
  }
}
