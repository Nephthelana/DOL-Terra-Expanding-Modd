function generateNonogramTable() {
	let numbers = [];
	for (let i = 1; i <= Math.pow(V.Nonogram.sideLength,2); i++) {
    	numbers.push(i);
	}
	let puzzleList = numbers.randomMany(Math.round(Math.pow(V.Nonogram.sideLength,2) * random(50,60) / 100));
	V.Nonogram.grid = {};
	for (let j=1; j <= Math.pow(V.Nonogram.sideLength,2); j++) {
		V.Nonogram.grid["No" + j] = {}
		let unitGrid = V.Nonogram.grid["No" + j];
		unitGrid.row = Math.floor((j - 1) / V.Nonogram.sideLength) + 1;
		unitGrid.column = j - (unitGrid.row - 1) * V.Nonogram.sideLength;
		unitGrid.puzzled = puzzleList.includes(j) ? true : false;
		unitGrid.answer = "blank";
	}
}
window.generateNonogramTable = generateNonogramTable;