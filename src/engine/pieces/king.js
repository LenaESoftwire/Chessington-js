import Square from '../square';
import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const allMoves = [];
        const legalMoves =[];

        let locationRow = location.row;
        let locationCol = location.col;
        
        allMoves.push([locationRow + 1, locationCol + 1]);
        allMoves.push([locationRow + 1, locationCol - 1]);
        allMoves.push([locationRow - 1, locationCol + 1]);
        allMoves.push([locationRow - 1, locationCol - 1]);
        allMoves.push([locationRow, locationCol + 1]);
        allMoves.push([locationRow, locationCol - 1]);
        allMoves.push([locationRow + 1, locationCol]);
        allMoves.push([locationRow - 1, locationCol]);

    allMoves.forEach(move => {
        if(move[0] > -1 && move[0] < 8 && move[1] > -1 && move[1] < 8) {
            legalMoves.push(Square.at(move[0], move[1]));
        }
    });

    return legalMoves;
    }

}
