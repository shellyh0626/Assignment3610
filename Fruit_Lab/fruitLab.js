// Fruit Lab 
// An array that stores values of each fruit type
var fruits = [
	{ name: "Apple", quantity: 20, color: "red" },
	{ name: "Orange", quantity: 10, color: "orange" },
	{ name: "Banana", quantity: 15, color: "yellow" },
	{ name: "Kiwi", quantity: 5, color: "green" },
	{ name: "Blueberry", quantity: 5, color: "blue" },
	{ name: "Grapes", quantity: 10, color: "purple" }
];

// A function that draws rectangular bars for each fruit
function drawRectangles() {
	var ctx = document.getElementById('canvas').getContext("2d");

	// Apple bar
	ctx.fillStyle = fruits[0].color;
	ctx.fillRect(0, 50, fruits[0].quantity * 50, 100);
	ctx.font = "30px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText(fruits[0].quantity, 20, 100);
	ctx.fillText(fruits[0].name, 20, 130);

	// Orange bar
	ctx.fillStyle = fruits[1].color;
	ctx.fillRect(0, 150, fruits[1].quantity * 50, 100);
	ctx.font = "30px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText(fruits[1].quantity, 20, 200);
	ctx.fillText(fruits[1].name, 20, 230);

	// Banana bar
	ctx.fillStyle = fruits[2].color;
	ctx.fillRect(0, 250, fruits[2].quantity * 50, 100);
	ctx.font = "30px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText(fruits[2].quantity, 20, 300);
	ctx.fillText(fruits[2].name, 20, 330);

	// Kiwi bar
	ctx.fillStyle = fruits[3].color;
	ctx.fillRect(0, 350, fruits[3].quantity * 50, 100);
	ctx.font = "30px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText(fruits[3].quantity, 20, 400);
	ctx.fillText(fruits[3].name, 20, 430);

	// Blueberry bar
	ctx.fillStyle = fruits[4].color;
	ctx.fillRect(0, 450, fruits[4].quantity * 50, 100);
	ctx.font = "30px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText(fruits[4].quantity, 20, 500);
	ctx.fillText(fruits[4].name, 20, 530);

	// Grape bar
	ctx.fillStyle = fruits[5].color;
	ctx.fillRect(0, 550, fruits[5].quantity * 50, 100);
	ctx.font = "30px Georgia";
	ctx.fillStyle = "#000000";
	ctx.fillText(fruits[5].quantity, 20, 600);
	ctx.fillText(fruits[5].name, 20, 630);
}