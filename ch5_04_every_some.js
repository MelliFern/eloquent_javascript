var ancestry_file = require('./ancestry_file'); 
var ancestry_array = JSON.parse(ancestry_file);

var every		= function(array, callback){
					for(var i=0;i<array.lenght; i++)
						if(!callback(array[i]))
							return false
					return true; 

				};

var some		= function(array, callback){
					for(var i=0;i<array.lenght; i++)
						if(callback(array[i]))
							return true;
					return false; 
				};

console.log([100, 10, 50].every(function(val){
			return (val%10 ==0)
		}));

console.log([100, 10, 9].some(function(val){
			return (val%3 ==0)
		}));

console.log([100, 10, 50,8].every(function(val){
			return (val%10 ==0)
		}));

console.log([100, 10, 50].some(function(val){
			return (val%17 ==0)
		}));