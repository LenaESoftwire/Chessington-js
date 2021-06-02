import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let legalMoves = [];
        const allMoves = []
        const location = board.findPiece(this);

        const locationRow = location.row;
        const locationCol = location.col;

        allMoves.push(Square.at(locationRow + 2, locationCol + 1));
        allMoves.push(Square.at(locationRow + 2, locationCol - 1));
        allMoves.push(Square.at(locationRow + 1, locationCol + 2));
        allMoves.push(Square.at(locationRow + 1, locationCol - 2));
        allMoves.push(Square.at(locationRow - 2, locationCol + 1));
        allMoves.push(Square.at(locationRow - 2, locationCol - 1));
        allMoves.push(Square.at(locationRow - 1, locationCol + 2));
        allMoves.push(Square.at(locationRow - 1, locationCol - 2));

        legalMoves = allMoves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8)

        // allMoves.forEach(move => {
        //     if(move[0] > -1 && move[0] < 8 && move[1] > -1 && move[1] < 8) {
        //         legalMoves.push(Square.at(move[0], move[1]));
        //     }
        // });

        return legalMoves;
    }
}