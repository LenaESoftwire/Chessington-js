import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let locationRowPlus = location.row
        let locationColPlus = location.col
        let locationRowMinus = location.row
        let locationColMinus = location.col

        let moves = [];
        for (let i = 0; i < 8; i++) {     

            locationRowPlus += 1
            locationRowMinus -= 1
            locationColPlus += 1
            locationColMinus -= 1

            if (locationRowPlus < 8 && locationColPlus < 8) {
                moves.push(Square.at(locationRowPlus, locationColPlus));  
            }
            if (locationRowPlus < 8 && locationColMinus > -1) {
                moves.push(Square.at(locationRowPlus, locationColMinus));  
            }
            if (locationRowMinus > -1 && locationColMinus > -1) {
                moves.push(Square.at(locationRowMinus, locationColMinus));
            }
            if (locationRowMinus > -1 && locationColPlus < 8) {
                moves.push(Square.at(locationRowMinus, locationColPlus));
            }
        }
        return moves;
    }
}
