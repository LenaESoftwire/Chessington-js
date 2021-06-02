import Square from '../square';
import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];

        for (let i = 1; this.checkIfOnBoard(location.row + i, location.col + i); i++) {
            if (board.getPiece(Square.at(location.row + i, location.col + i))) {
                break;
            }
            moves.push(Square.at(location.row + i, location.col + i));
        }

        for (let i = 1; this.checkIfOnBoard(location.row + i, location.col - i); i++) {
            if (board.getPiece(Square.at(location.row + i, location.col - i))) {
                break;
            }
            moves.push(Square.at(location.row + i, location.col - i));
        }

        for (let i = 1; this.checkIfOnBoard(location.row - i, location.col - i); i++) {
            if (board.getPiece(Square.at(location.row - i, location.col - i))) {
                break;
            }
            moves.push(Square.at(location.row - i, location.col - i));
        }

        for (let i = 1; this.checkIfOnBoard(location.row - i, location.col + i); i++) {
            if (board.getPiece(Square.at(location.row - i, location.col + i))) {
                break;
            }
            moves.push(Square.at(location.row - i, location.col + i));
        }

        for (let i = 1; this.checkIfOnBoard(location.row, location.col + i); i++) {
            if (board.getPiece(Square.at(location.row, location.col + i))) {
                break;
            }
            moves.push(Square.at(location.row, location.col + i));
        }

        for (let i = 1; this.checkIfOnBoard(location.row + i, location.col); i++) {
            if (board.getPiece(Square.at(location.row + i, location.col))) {
                break;
            }
            moves.push(Square.at(location.row + i, location.col));
        }
        
        for (let i = 1; this.checkIfOnBoard(location.row, location.col - i); i++) {
            if (board.getPiece(Square.at(location.row, location.col - i))) {
                break;
            }
            moves.push(Square.at(location.row, location.col - i));
        }

        for (let i = 1; this.checkIfOnBoard(location.row - i, location.col); i++) {
            if (board.getPiece(Square.at(location.row - i, location.col))) {
                break;
            }
            moves.push(Square.at(location.row - i, location.col));
        }
        return moves;
    }
}