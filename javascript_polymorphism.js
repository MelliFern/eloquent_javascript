var Shape = function(){};
Shape.prototype.draw = function(){
	return "I am a generic shape";
}

var Circle = function(){};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function(){
	return "I am a circle";
}

var Square = function(){};
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function(){
	return "I am a Square";
}

var Triangle = function(){};
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.draw = function(){
	return "I am a Triangle";
}


var shapes = [new Shape(), 
			  new Circle(), 
			  new Square(),
			  new Triangle()];


shapes.forEach(function(shape){
	console.log(shape.draw()+"<br/>");
});