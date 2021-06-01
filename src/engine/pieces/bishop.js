import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let locationRow = location.row
        let locationCol = location.col
        let locationRow2 = location.row
        let locationCol2 = location.col

        let moves = [];
        for (let i = 0; i < 8; i++) {     

            locationRow += 1
            locationRow2 -= 1
            locationCol += 1
            locationCol2 -= 1

            if (locationRow < 8 && locationCol < 8) {
                moves.push(Square.at(locationRow, locationCol));  
            }
            if (locationRow < 8 && locationCol2 > -1) {
                moves.push(Square.at(locationRow, locationCol2));  
            }
            if (locationRow2 > -1 && locationCol2 > -1) {
                moves.push(Square.at(locationRow2, locationCol2));
            }
            if (locationRow2 > -1 && locationCol < 8) {
                moves.push(Square.at(locationRow2, locationCol));
            }
        }
        return moves;
    }
}
