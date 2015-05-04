var rangeArray 		= function(){
						var array = [];
						for(var i=1; i<=100; i++)
							array[i]=i; 

						for(var i=3; i<=100; i=i+3)
							array[i]='Fizz'; 
							
						for(var i=5; i<=100; i=i+5){
							if(i%3 == 0)
								array[i] = 'FizzBuzz';
							else
								array[i] = 'Buzz'; 
						}

						return array;
					};

console.log(rangeArray());


	
/*
var divisibleBy 	= function(val,divisor){
						return (val%divisor)==0;
					}	

var replace 		= function(array, callback1, callback2){
						for(var i=0; i< array.length; i++)
							if(callback1())

					};	*/