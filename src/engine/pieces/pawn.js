import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const moves = [];
        const square1W = Square.at(location.row + 1, location.col);
        const square2W = Square.at(location.row + 2, location.col);
        const wTakeL = Square.at(location.row + 1, location.col - 1);
        const wTakeR = Square.at(location.row + 1, location.col + 1);

        const square1B = Square.at(location.row - 1, location.col);
        const square2B = Square.at(location.row - 2, location.col);
        const bTakeL = Square.at(location.row - 1, location.col - 1);
        const bTakeR = Square.at(location.row - 1, location.col + 1);


        if (this.player === Player.WHITE) {

            if (location.row == 7) {
                return moves;
            }

            if (board.getPiece(square1W)) {
                return moves
            }
            
            if (this.checkIfOnBoard(wTakeL) && board.getPiece(wTakeL)) {
                if (board.getPiece(wTakeL).player === Player.BLACK && !(board.getPiece(wTakeL) instanceof King)) {
                    moves.push(wTakeL);
                }
            }

            if (this.checkIfOnBoard(wTakeR) && board.getPiece(wTakeR)) {
                if (board.getPiece(wTakeR).player === Player.BLACK && !(board.getPiece(wTakeR) instanceof King)) {
                    moves.push(wTakeR);
                }
            }

            moves.push(square1W);

            if (location.row === 1) {
                if (board.getPiece(square2W)) {
                    return moves
                }
                moves.push(square2W)
            }
        } else {

            if (location.row == 0) {
                return moves
            }

            if (board.getPiece(square1B)) {
                return moves
            }
            moves.push(square1B);

            if (this.checkIfOnBoard(bTakeL) && board.getPiece(bTakeL)) {
                if (board.getPiece(bTakeL).player === Player.WHITE && !(board.getPiece(bTakeL) instanceof King)) {
                    moves.push(bTakeL);
                }
            }

            if (this.checkIfOnBoard(bTakeR) && board.getPiece(bTakeR)) {
                if (board.getPiece(bTakeR).player === Player.WHITE && !(board.getPiece(bTakeR) instanceof King)) {
                    moves.push(bTakeR);
                }
            }

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