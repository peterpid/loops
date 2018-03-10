
function drawTree(level) {
	var star = '';
	for (var i=0; i < level; i++) {
		star += '*';
		console.log(star);
	}
	console.log('\n');
}

function drawTree2(level) {
	var stars = '*';
	var spaces = ' ';
	spaces = spaces.repeat(level);

	for (var i=0; i < level; i++) {
		console.log(spaces + stars);
		stars += '**';
		spaces = spaces.substr(0, spaces.length-1);
	}
	console.log('\n');
}

drawTree(1);
drawTree(3);
drawTree(5);
drawTree(10);

drawTree2(1);
drawTree2(3);
drawTree2(5);
drawTree2(10);
