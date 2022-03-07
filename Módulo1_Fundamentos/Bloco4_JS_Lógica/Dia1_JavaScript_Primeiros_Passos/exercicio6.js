let chessPiece = "Knight";
chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
  case "pawn":
    console.log("Only one square forward. Can move two squares if it's the first move");
    break;

  case "bishop":
    console.log("Any number of squares diagonally");
    break;

  case "knight":
    console.log("Moves in 'L' Shape. Can jump over pieces");
    break;

  case "rook":
    console.log("Any number of squares vertically or horizontally");
    break;

  case "queen":
    console.log("Any number of squares vertically, horizontally or diagonally");
    break;

  case "king":
    console.log("Only one square vertically, horizontally or diagonally");
    break;

  default: 
    console.log("Invalid piece");
}