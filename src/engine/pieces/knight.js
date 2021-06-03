import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [[2, 1], [2, -1], [1, -2], [1, 2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]]; 
        const ourPiece = this

        return board.findMoves(directions, location, ourPiece, board, 1)    
       
    }

}
