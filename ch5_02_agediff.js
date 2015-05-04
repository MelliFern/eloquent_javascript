var ancestry_file = require('./ancestry_file'); 
var ancestry_array = JSON.parse(ancestry_file);

// for each row find the age difference

var getAgeDiffArray = function(callback ){
						var ageDiffArray = [];
						var mother = {};
						var person = {};
						for(var i=0; i<ancestry_array.length; i++){
							person = ancestry_array[i];
							mother = callback(person.mother);
							
							if(mother.name!= null)
								ageDiffArray.push(person.born - mother.born); 
						}
						return ageDiffArray; 
					};

// find array with name

var getMother = function(name){
					var motherName={}; 
					for(var i=0; i<ancestry_array.length; i++){
						if(ancestry_array[i].name == name){
								motherName.name = ancestry_array[i].name;
								motherName.born = ancestry_array[i].born; 
								break; 
							}
						}
						return motherName; 
					}	
				
var getAverage = function(callback1){
					var array = callback1(getMother);
					var sum = 0;
					for(var i=0; i<array.length; i++){
						sum += array[i];
					}
					return(sum/array.length);
				};

console.log(getAverage(getAgeDiffArray));

