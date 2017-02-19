'use strict'

var Shape = shapesModule;
var Point = pointModule;

var point = new Point(0, 0);
var rect = new Shape.Rectangle(point, 50, 50, '#00f');
rect.draw();

var point2 = new Point(30, 30);
var circle = new Shape.Circle(point2, 15, '#00f');
circle.draw();

var shapes = [point, rect, point2, circle];
var shapesSelect = document.getElementById('shapes');
for(var i = 0; i < shapes.length; i++) {
	var shapeOption = document.createElement('element');
	shapesSelect.appendChild(shapeOption);
	shapeOption.innetHTML = shapes[i].toString();
}

