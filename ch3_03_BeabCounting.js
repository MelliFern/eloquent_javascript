var countBs 	= function(inputString){
					var count =0; 
					var step = 1; 
					for(var i=0; i<=inputString.length;i= step){
						step = inputString.indexOf('B',i); 
						if(step < 0)
							break;
						else
							count++;
						step++; 
					}
					return count;
				};

var countCHARs 	= function(inputString, searchVal){
					var count =0; 
					var step = 1; 
					for(var i=0; i<=inputString.length;i= step){
						step = inputString.indexOf(searchVal,i); 
						if(step < 0)
							break;
						else
							count++;
						step++; 
					}
					return count;
				};




console.log(countBs('ksjljflsdfBBBBlkjlBBB BBB'));

console.log(countCHARs('hello, this is hello', 'l'));