var ancestry_file = require('./ancestry_file'); 
var ancestry_array = JSON.parse(ancestry_file);


var getGroups = function(array, groupCriteria){
					var groups = {};
					var group = null;
					for(var i=0; i<array.length; i++){
						groupName = groupCriteria(array[i]); 
						//console.log("century"+ groupName);

						if(groupName in groups)
							groups[groupName].push(getAge(array[i]));
						else
							groups[groupName] = [getAge(array[i])];
						
						//console.dir(groups);
					}	
					return groups; 
				};

var getCentury	= function(row){
					return Math.ceil(row.died/100);
				};

var getAge 		= function(row){
					return row.died - row.born; 
				};
//var reduce		= function(array,)

var reduce 		= function(array,combine){
					var value = 0;
					for(var i=0; i<array.length; i++)
						value=combine(value, array[i]);
					return value/array.length;
				};
var average		= function(val1,val2){
					return val1+val2;
				};

console.log("groups");
console.dir(getGroups(ancestry_array, getCentury));

var expectancy = function(inputArray){
					// get groups
					var groups = getGroups(inputArray, getCentury);
					console.log("Life expectancy");
					for(var groupName in groups)
						console.log(groupName+"th Century: " + 
										(reduce(groups[groupName],average)));
				};

expectancy(ancestry_array);