import Sliding from '../sliding.js';

export default class Bishop extends Sliding {
	moves(board, position) {
		const moveDirections = [[1,1],[-1,-1],[-1,1],[1,-1]];
		const moves = moveDirections.map(dir => {
			const x = dir[0];
			const y = dir[1];
			return this.direction(x, y, board, position);
		});
		return _.flatten(moves);
	}
}