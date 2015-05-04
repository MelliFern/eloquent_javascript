var range = function(start, end, step){
	step = typeof step !== 'undefined' ? step:1;
	
	
	var result = []; 
	if(step > 0){
		for(var i=start; i<= end; i+=step)
			result.push(i);
	}else
	if (step <0){
		for(var i=start; i>= end; i+=step) 
			result.push(i);
		
	}
	else return ('step value cannot be zero');
	
	return result; 
}

var sum = function(valueArray){
	var result = 0; 
	for(var i=0; i<valueArray.length; i++)
		result += valueArray[i]; 
	return result; 
}


console.log(range(1,10));
console.log(range(1,10, 2));
console.log(range(10,1, -2));
console.log(sum(range(1,10,2)));