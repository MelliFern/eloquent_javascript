var func1 = function(val){
				return function(){return ++val;}
			}
var func2 = func1(10); 

console.log(func2());
console.log(func2());
func2 = func1(10); 
console.log(func2());
