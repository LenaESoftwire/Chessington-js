import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const legalMoves = [];
        const allMoves = []
        const location = board.findPiece(this);

        let locationRow = location.row;
        let locationCol = location.col;

        allMoves.push([locationRow + 2, locationCol + 1]);
        allMoves.push([locationRow + 2, locationCol - 1]);
        allMoves.push([locationRow + 1, locationCol + 2]);
        allMoves.push([locationRow + 1, locationCol - 2]);
        allMoves.push([locationRow - 2, locationCol + 1]);
        allMoves.push([locationRow - 2, locationCol - 1]);
        allMoves.push([locationRow - 1, locationCol + 2]);
        allMoves.push([locationRow - 1, locationCol - 2]);

        allMoves.forEach(move => {
            if(move[0] > -1 && move[0] < 8 && move[1] > -1 && move[1] < 8) {
                legalMoves.push(Square.at(move[0], move[1]));
            }
        });

        return legalMoves;
    }
}
