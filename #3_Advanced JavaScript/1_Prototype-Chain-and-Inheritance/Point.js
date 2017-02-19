var pointModule = (function(){
	function Point(x, y) {
		if(typeof x === 'number'){
			this._x = x;
		} else {
			throw 'x should be a number';
		}
		if(typeof y === 'number') {
			this._y = y;
		} else {
			throw 'y should be a number';
		}
	}

	Point.prototype.toString = function() {
		return 'Point(' + this._x + ', ' + this._y + ')';
	}

	return Point;
})();