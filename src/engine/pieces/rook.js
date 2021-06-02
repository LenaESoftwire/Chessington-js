import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];

        for (let i = 1; location.col + i < 8; i++) {
            if (board.getPiece(Square.at(location.row, location.col + i))) {
                break;
            }
            moves.push(Square.at(location.row, location.col + i));
        }

        for (let i = 1; location.row + i < 8; i++) {
            if (board.getPiece(Square.at(location.row + i, location.col))) {
                break;
            }
            moves.push(Square.at(location.row + i, location.col));
        }


        for (let i = 1; location.col - i > -1; i++) {
            if (board.getPiece(Square.at(location.row, location.col - i))) {
                break;
            }
            moves.push(Square.at(location.row, location.col - i));
        }

        for (let i = 1; location.row - i > -1; i++) {
            if (board.getPiece(Square.at(location.row - i, location.col))) {
                break;
            }
            moves.push(Square.at(location.row - i, location.col));
        }

        const legalMoves = moves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8);
        return legalMoves;
    }
}