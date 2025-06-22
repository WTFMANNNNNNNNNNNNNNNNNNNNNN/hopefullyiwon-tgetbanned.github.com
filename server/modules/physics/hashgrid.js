module.exports = class HashGrid {
	static stride = 1 << 16;

	cells = new Map();
	constructor(cellSize) {
		this.cellSize = cellSize;
	}

	insert(entity, minX, minY, maxX, maxY) {
		const endX = maxX >> this.cellSize;
		const endY = maxY >> this.cellSize;
		for (let x = minX >> this.cellSize; x <= endX; x++) {
			for (let y = minY >> this.cellSize; y <= endY; y++) {
				const key = x + y * HashGrid.stride;
				const cell = this.cells.get(key);
				if (cell === undefined) {
					this.cells.set(key, [entity]);
				} else {
					cell.push(entity);
				}
			}
		}
	}

	query(minX, minY, maxX, maxY) {
		const output = new Set();
		const endX = maxX >> this.cellSize;
		const endY = maxY >> this.cellSize;
		for (let x = minX >> this.cellSize; x <= endX; x++) {
			for (let y = minY >> this.cellSize; y <= endY; y++) {
				const key = x + y * HashGrid.stride;
				const cell = this.cells.get(key);
				if (cell !== undefined) {
					for (let i = 0; i < cell.length; i++) {
						const entity = cell[i];
						if (entity.minX < maxX && entity.maxX > minX && entity.minY < maxY && entity.maxY > minY) {
							output.add(entity);
						}
					}
				}
			}
		}
		return output;
	}

	clear() {
		this.cells.clear();
	}
}
