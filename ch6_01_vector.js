function vector (x,y) {
		this.x = x; 
		this.y = y;
};
vector.prototype.setLocation = function(x,y){
								this.x = x; 
								this.y = y;
							};
vector.prototype.plus 		= function(vector2){
								return {x:this.x + vector2.x,
										y:this.y + vector2.y}
							};

vector.prototype.minus		= function(vector2){
								return {x:this.x - vector2.x, 
										y:this.y - vector2.y}
							};


var point1 = new vector(2,2);
point1.setLocation(2,4);
console.dir(point1.plus({x:5, y:10}));

point1.setLocation(20,30);
console.dir(point1.minus({x:5, y:10}));