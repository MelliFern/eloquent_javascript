/*
function reduce(array,combine,start){
	var current = start; 
	for(var i=0; i<array.length; i++)
		current = combine(current, array[i]);
	return current; 
}

console.log(reduce([1,2,3,4], function(a,b){
	return a+b;
	},0));


/*-------------------------------------------------*/
console.log("***************************"); 

var flatten = function (array, combine, mainArray){
							for(var i=0; i<array.length; i++)
								mainArray = combine(mainArray, array[i]);
							return mainArray; 
						};
var inputArray = [[1,2,3],[10,20,30],[100,200]];
var resultArray = flatten(inputArray, function(combineArray, array)
									{
										for(var i=0; i<array.length; i++)
											combineArray.push(array[i]);
										return combineArray; 
									},
									[]);
console.log("result ");
console.dir(resultArray);	
