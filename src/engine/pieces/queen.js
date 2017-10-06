import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        const vectorUR = {row: 1, col: 1};
        const vectorDR = {row: -1, col: 1};
        const vectorUL = {row: 1, col: -1};
        const vectorDL = {row: -1, col: -1};
        const vectorU = {row: 1, col: 0};
        const vectorD = {row: -1, col: 0};
        const vectorR = {row: 0, col: 1};
        const vectorL = {row: 0, col: -1};

        function findMoves (piece, vector) {
            for (let i = 1; i < 7; i++) {
                const square = Square.at(location.row + i*vector.row, location.col + i*vector.col);
                if (piece.checkIfOnBoard(square.row, square.col)) {
                    const oppPiece = board.getPiece(square);
                    if (oppPiece) {
                        if (oppPiece.player === piece.player) {
                            break;
                        }
                        console.log(typeof(oppPiece));
                        console.log(oppPiece);
                        if (oppPiece instanceof King) {
                            break;
                        }
                        moves.push(square);
                        break;   
                    }
                    moves.push(square);
                }
            }
        }
        findMoves(this, vectorUR);
        findMoves(this, vectorDR);
        findMoves(this, vectorUL);
        findMoves(this, vectorDL);
        findMoves(this, vectorU);
        findMoves(this, vectorD);
        findMoves(this, vectorL);
        findMoves(this, vectorR);
        return moves;
    }
}