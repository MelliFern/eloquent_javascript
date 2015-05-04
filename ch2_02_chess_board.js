var chessBoard = function(size){

					for(j=0; j<size; j++){
						if(j%2==0){
							for(var i =0; i< size; i++){
								if(i%2==0)
									process.stdout.write("#");
								else
									process.stdout.write(' ');
							};
						}
						else{
							for(var i =0; i< size; i++){
								if(i%2==0)
									process.stdout.write(' ');
								else
									process.stdout.write('#');
							};

						}
						console.log(''); 

					};
						
				};
chessBoard(16);