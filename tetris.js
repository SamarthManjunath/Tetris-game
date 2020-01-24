//Javascript file for Tetris game
const canvas = document.getElementById('tetris'); //access the canvas element to draw graphics
const context = canvas.getContext("2d"); //provides methods to access methods and properties

context.scale(20, 20); // increases all the context properties by 20 times. 

//tetris pieces
// Creating T shape
const matrix = [
	[0, 0, 0],
	[1, 1, 1],
	[0, 1, 0]

];

function createMatrix(w, h){
	const matrix = [];
	while (h--){
		matrix.push(new Array(w).fill(0));
	}
	return matrix;
}

function draw(){

	context.fillStyle = "#000"; // black color to fill up the area
	context.fillRect(0, 0, canvas.width, canvas.height); // rectangle width and heigth given inn HTML.
	drawMatrix(player.matrix, player.pos);
}

// Function to draw a shape
function drawMatrix(matrix, offset){ // offset is used to position the piece anywhere in the board.

	matrix.forEach((row, y) => {
	row.forEach((value, x) => {
		if (value != 0){
			context.fillStyle = "red";
			context.fillRect(x + offset.x, 
							 y + offset.y,
							 1, 1); // very small size, so need to scale
		}
	})
})
}



let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

function playerDrop(){
		player.pos.y++;
		dropCounter = 0;
}

function update(time = 0){
	let deltaTime = time - lastTime;
	lastTime = time; 

	dropCounter += deltaTime;
	if (dropCounter > dropInterval){
		playerDrop();

	}
	draw();
	requestAnimationFrame(update); // for continous creation of shapes
}

const arena = createMatrix(12, 20);
console.log(arena);
console.table(arena);

const player = {  // creating an alias 
	pos: {x: 5, y: 5},
	matrix: matrix
}



document.addEventListener("keydown", event => {
	if (event.keyCode === 37){
		player.pos.x--;
	}else if (event.keyCode === 39){
		player.pos.x++;
	} else if (event.keyCode === 40){
		playerDrop();
	}
})



update();

 
