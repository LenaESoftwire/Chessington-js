import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        
        const location = board.findPiece(this);
        const moves = [];
        console.log(board.getPiece(Square.at(2, 3)));

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
        //const legalMoves = moves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8)
        return moves;
    }
}