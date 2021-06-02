export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    checkIfOnBoard(row, col) {
        if (row < 0 || row > 7 || col < 0 || col > 7) {
            return false
        }
        return true;
    }
}