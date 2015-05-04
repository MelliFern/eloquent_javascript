var ancestry_file = require('./ancestry_file'); 
var ancestry_array = JSON.parse(ancestry_file);

var filter 		= function(array, test){
					var passed = [];
					for(var i=0; i<array.length; i++)
						if(test(array[i]))
							passed.push(array[i]); 
					return passed; 
				 };

var young1924 	= function(person){
					return (person.born > 1900 && person.born <1925);
				};

var findSon 	= function(person){
					return (person.father == "Carel Haverbeke");
				};

console.log(" \n FIND YOUNG\n"); 
console.log(filter(ancestry_array,young1924)); 
console.log(" \n FIND SON\n"); 
console.log(filter(ancestry_array,findSon));

console.log("\n MAP - OVER NINETY\n")

var map 		= function (array, transform){
					var mapped = [];
					for(var i=0; i<array.length; i++)
						mapped.push(transform(array[i]))
					return mapped;
				}

var overNinety 	= ancestry_array.filter(function(person){
					return (person.died - person.born)>90; 
				}); 

console.log(map(overNinety, function(person){return person.name; }));

console.log("\n Reduce\n");

var reduce = function(array, combine, start){
				var current = start; 
				for(var i=0; i<array.length; i++)
					current = combine(current, array[i]);
				return current; 
			}

var addElements = function(val1, val2){
					return val1 + val2;
				}

console.log(reduce([1,2,3,4], addElements, 0));

var age 		= function(person){return person.died - person.born;}
var male 		= function(person){return person.sex == "m";}
var female 		= function(person){return person.sex == "f";}

var average 	= function(array){
						
						var avg = 0; 
						for(var i=0; i<array.length; i++)
							if((array[i].died - array[i].born)>0)
								avg += age(array[i]);

						return avg/array.length;
					}


// find average male age
console.log("\n AVG MALE AGE\n"); 
console.log(average(ancestry_array.filter(male)));	

// find average female age
console.log("\n AVG FEMALE AGE\n"); 
console.log(average(ancestry_array.filter(female)));	