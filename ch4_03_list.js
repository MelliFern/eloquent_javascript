var arrayToList 	= function(array,idx){
							var list ={};
							if(idx >= array.length)
								return null;
							list.value=array[idx]; 
							list.rest = arrayToList(array, ++idx); 
							return list; 		
					  };

var listToArray		= function(list, idx, array){

						if(list == null)
							return array; 
						array[idx] = list.value;
						console.dir(array);
						array = listToArray(list.rest,++idx, array); 
							return array; 
					};






console.dir(arrayToList([1,2,3],0));
console.dir(listToArray({ value: 10, 
						  rest: { value: 20, 
								rest: { value: 30, 
										rest: null } } }, 0,[]
));