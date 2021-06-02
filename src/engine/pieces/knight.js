import Square from '../square';
import Piece from './piece';
import King from './king';
import Player from '../player';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let legalMoves = [];
        const moves = []
        const location = board.findPiece(this);

        const vectorUR = {row: 2, col: 1};
        const vectorDR = {row: -2, col: 1};
        const vectorUL = {row: 2, col: -1};
        const vectorDL = {row: -2, col: -1};
        const vectorRU = {row: 1, col: 2};
        const vectorRD = {row: -1, col: 2};
        const vectorLU = {row: 1, col: -2};
        const vectorLD = {row: -1, col: -2};

        function findMoves (piece, vector) {
            const square = Square.at(location.row + vector.row, location.col + vector.col);
            if (piece.checkIfOnBoard(square.row, square.col)) {
                const oppPiece = board.getPiece(square);
                if (oppPiece) {
                    if (oppPiece.player === piece.player) {
                        return;
                    }
                    if (oppPiece instanceof King) {
                        return;
                    }
                    moves.push(square);
                    return;   
                }
                moves.push(square);
            }
        }
        findMoves(this, vectorUR);
        findMoves(this, vectorDR);
        findMoves(this, vectorUL);
        findMoves(this, vectorDL);
        findMoves(this, vectorRU);
        findMoves(this, vectorRD);
        findMoves(this, vectorLU);
        findMoves(this, vectorLD);
        return moves;

        // const locationRow = location.row;
        // const locationCol = location.col;

        // allMoves.push(Square.at(locationRow + 2, locationCol + 1));
        // allMoves.push(Square.at(locationRow + 2, locationCol - 1));
        // allMoves.push(Square.at(locationRow + 1, locationCol + 2));
        // allMoves.push(Square.at(locationRow + 1, locationCol - 2));
        // allMoves.push(Square.at(locationRow - 2, locationCol + 1));
        // allMoves.push(Square.at(locationRow - 2, locationCol - 1));
        // allMoves.push(Square.at(locationRow - 1, locationCol + 2));
        // allMoves.push(Square.at(locationRow - 1, locationCol - 2));

        // legalMoves = allMoves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8)
    }
}