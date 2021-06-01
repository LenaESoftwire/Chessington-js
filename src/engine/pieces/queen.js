import Square from '../square';
import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        for (let i = 0; i < 8; i++) {
            if (i !== location.col) {
                moves.push(Square.at(location.row, i));
            }
            if (i !== location.row) {
                moves.push(Square.at(i, location.col));
            }
        }

        let locationRowPlus = location.row
        let locationColPlus = location.col
        let locationRowMinus = location.row
        let locationColMinus = location.col

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
