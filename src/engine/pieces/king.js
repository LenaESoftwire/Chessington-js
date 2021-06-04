import Square from '../square';
import Piece from './piece';
import Board from '../board';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]]; 
        const ourPiece = this

        const oppPieces = board.findAllOppPieces();
        const oppMoves = [];
        oppPieces.forEach(piece => oppMoves.push(...piece.getAvailableMoves(board)));
        console.log (oppMoves);
        const ourMoves = board.findMoves(directions, location, ourPiece, board, 1);
        return ourMoves.filter(move => !oppMoves.some(oppMove => oppMove.row === move.row && oppMove.col === move.col));    
    };

        // // const allMoves = board.findMoves(directions, location, ourPiece, board, 1);
        // // allMoves.forEach(move => {

            
        // });


        //console.log(board);
        
       
}