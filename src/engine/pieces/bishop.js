import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [[1, 1], [-1, 1], [1, -1], [-1, -1]]; 
        const ourPiece = this

        return board.findMoves(directions, location, ourPiece, board, 7)    
       
    }

}
