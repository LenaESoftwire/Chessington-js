import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const allMoves = [];
        const legalMoves = [];
        if (this.player === Player.WHITE) {
            allMoves.push(Square.at(location.row + 1, location.col));
            if (location.row === 1) {
                allMoves.push(Square.at(location.row + 2, location.col));
            }
        } else {
            allMoves.push(Square.at(location.row - 1, location.col));
            if (location.row === 6) {
                allMoves.push(Square.at(location.row - 2, location.col));
            }
        }
        allMoves.forEach(move => {
            if(!getPiece(move)) {
                legalMoves.push(move);
            }
        })
        return legalMoves;
    }
}
