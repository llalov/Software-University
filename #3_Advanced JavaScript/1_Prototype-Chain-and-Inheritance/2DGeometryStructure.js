if (!Object.create) {
	Object.create = function(proto) {
  	    function F(){};
  	    F.prototype = proto;
 	    return new F();
   }
}

Object.prototype.extends = function(parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
}

var shapesModule = (function(){
	'use strict';

	function Shape(point, color) {
		this._point = point;
		this._color = color;	
    }

    Shape.prototype.toString = function() {
    	var output ='Color: '+this._color+', Point 1: '+this._point+', ';
    	return output;
    }

    Shape.prototype.draw = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = this._color;
        return ctx;
    };

 	function Circle(point, radius, color) {
 		Shape.call(this, point, color);
 		if (typeof radius === 'number') {
 			this._radius = radius;
 		} else {
 			throw 'radius must be a number';
 		}
	}

	Shape.Circle = Circle;
 	Circle.prototype.extends(Shape);

 	Circle.prototype.toString = function() {
 		var output = "Circle, ";
 		output += Shape.prototype.toString(this);
 		output += 'Radius: '+this._radius+' ';
 		return output;
 	}

 	Circle.prototype.draw = function() {
 		Shape.prototype.draw.call(this);
 		var ctx = Shape.prototype.draw();
 		ctx.beginPath();
 		ctx.arc(this._point._x, this._point._y, this._radius, 0, 2* Math.PI);
 		ctx.stroke();
 		ctx.closePath();
 	}

 	function Rectangle(point, width, height, color) {
 		Shape.call(this, point, color);
 		if (typeof width === 'number') {
 			this._width = width;
 		} else {
 			throw 'width must be a number';
 		}
 		if (typeof height === 'number') {
 			this._height = height;
 		} else {
 			throw 'height must be a number';
 		}
 	}

 	Shape.Rectangle = Rectangle;
 	Rectangle.prototype.extends(Shape);

 	Rectangle.prototype.toString = function () {
 		var output = 'Rectangle, ';
 		output += Shape.prototype.toString(this);
 		output += 'Width: '+this._width+', Height: '+this._height+' ';
 		return output;
 	}

 	Rectangle.prototype.draw = function() {
 		Shape.prototype.draw.call(this);
 		var ctx = Shape.prototype.draw();
 		ctx.rect(this._point._x, this._point._y, this._width, this._height);
 		ctx.stroke();
 	}

 	function Segment(point, point2, color) {
 		Shape.call(this, point, color);
 		this._point2 = point2;
 	}

 	Shape.Segment = Segment;
 	Segment.prototype.extends(Shape);

 	Segment.prototype.toString = function() {
 		var output = "Segment, ";
 		output += Shape.prototype.toString(this);
 		output += 'Point2: '+this._point2+' ';
 		return output;
 	}

 	Segment.prototype.draw = function() {
 		Shape.prototype.draw.call(this);
 		var ctx = Shape.prototype.draw();
 		ctx.beginPath();
 		ctx.moveTo(this._point._x, this._point_y);
 		ctx.lineTo(this._point2._x2, this._point2._y);
 		ctx.stroke();
 		ctx.closePath();
 	}	

 	function Triangle(point, point2, point3, color) {
 		Segment.call(this, point, point2, color);
 		this._point3 = point3;
 	}
 	
 	Shape.Triangle = Triangle;
 	Triangle.prototype.extends(Segment);

 	Triangle.prototype.toString = function() {
 		var output = 'Triangle, ';
 		output += Shape.prototype.toString.call(this);
 		output += 'p1: '+this._point+' ';
 		output += 'p2: '+this._point2+' ';
 		output += 'p3: '+this._point3+' ';
 		return output;
 	}

 	Triangle.prototype.draw = function() {
 		Shape.prototype.draw.call(this);
 		var ctx = Shape.prototype.draw();
 		ctx.beginPath();
 		ctx.moveTo(this._point._x, this._point._y);
 		ctx.lineTo(this._point2._x, this._point2._y);
 		ctx.lineTo(this._point3._x, this._point3._y);
 		ctx.lineTo(this._point._x, this._point._y);
 		ctx.stroke();
 		ctx.closePath();
 	}

 	function Line(point, point2, color) {
 		Segment.call(this, point, point2, color);
 	}

 	Shape.Line = Line;
 	Line.prototype.extends(Segment);

 	Line.prototype.toString = function() {
 		var output = 'Line, ';
 		output += Shape.prototype.toString.call(this);
 		output += 'Point2: '+this._point2+' ';
 		return output;
 	}

 	Line.prototype.draw = function() {
 		Shape.prototype.draw.call(this);
 		var ctx = Shape.prototype.draw();
 		ctx.beginPath();
 		ctx.moveTo(this._point._x, this._point._y);
 		ctx.lineTo(this._point2._x, this._point2._y);
 		ctx.stroke();
 		ctx.closePath();
 	}

	return Shape;
}());

 