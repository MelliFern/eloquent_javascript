var getReverseArray 	= function(array){
							var reverseArray = []; 
							var idx = 0; 
							for(var i=array.length-1; i>=0; i--){
								reverseArray[idx] = array[i];
								idx++; 
							}
							return reverseArray;
						};

var getReverseInplace 	= function(array){
							var temp = 0;
							var maxIdx = array.length-1;  
							for(var i =0; i< maxIdx/2; i++){
								temp = array[i]; 
								array[i] = array[maxIdx-i];
								array[maxIdx-i] = temp; 
							}
							return array; 
						};

console.log("Reverse Array - Create new Array");
console.log(getReverseArray([100,200,300,4]));


console.log("Reverse Array - Inplace"); 
console.log(getReverseInplace([100,200,300,4]));