import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const moves = [];
        const square1W = Square.at(location.row + 1, location.col);
        const square2W = Square.at(location.row + 2, location.col);

        const square1B = Square.at(location.row - 1, location.col);
        const square2B = Square.at(location.row - 2, location.col);


        if (this.player === Player.WHITE) {

            if(location.row == 7) {
                return moves;
            }

            if (board.getPiece(square1W)) {
                return moves
            }

            moves.push(square1W);

            if (location.row === 1) {
                if (board.getPiece(square2W)) {
                    return moves
                }
                moves.push(square2W)
            }
        } else {

            if(location.row == 0) {
                return moves
            }
            
            if (board.getPiece(square1B)) {
                return moves
            }
            moves.push(square1B);

            if (location.row === 6) {
                if (board.getPiece(square2B)) {
                    return moves
                }
                moves.push(square2B)
            }
        }
        return moves;
    }
}