import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    findMoves(directions, location, piece, board, distance) {

        const moves = [];

        directions.forEach(direction => {

            for (let i = 1; piece.checkIfOnBoard(location.row + direction[0] * i, location.col + direction[1] * i); i++) {
                if (i > distance) {
                    break;
                }
                const square = Square.at(location.row + direction[0] * i, location.col + direction[1] * i);
                //console.log(square);
                if (board.getPiece(square)) {
                    if (piece.player === (board.getPiece(square)).player || (board.getPiece(square) instanceof King)) {
                        break;
                    }
                    moves.push(square);
                    break;
                }
                moves.push(square);
            }
        })
        return moves;
    }
}
