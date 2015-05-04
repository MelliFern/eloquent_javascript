
var getProperty		= function(obj){
						var properties=[];
						var idx = 0; 
						for(var propertyName in obj){
							properties[idx]= propertyName;
							idx++
						}
						return properties;
					  }

//console.dir(getProperty(5,5));

var isObject		= function(object){
						if(typeof(object)=='object')
							return true;
						else return false;
					};
var compare 		= function(operand1, operand2, property){
							if(operand1[property] == operand2[property])
								return true;
							else
								return false;
						}

var deepCompare 	= function(operand1, operand2){
						var isEqual = false;
						
						if(typeof(operand1) == typeof(operand2)){
							if(isObject(operand1)){
								var properties1 = getProperty(operand1);
								var properties2 = getProperty(operand2);
								if(properties1.length != properties2.length)
									return false;
								for (var i=0;i<properties1.length; i++){
									if(!compare(operand1, operand2, properties1[i]))
										return false; 
								}
								return true; 		
							}
							else 
								if(operand1 == operand2)
									return true;
							else
								return false;

						}
						else 
							return false; 

					};

console.log(deepCompare(5,5));
console.log(deepCompare(6,5));
//console.dir(getProperty({id:1, name:'mel', title:'senior dev engg'}));
console.log(deepCompare({id:1, name:'mel', title:'senior dev engg'},
						{id:1, name:'mel', title:'senior dev engg'}));
console.log(deepCompare({id:1, name:'mel', title:'senior dev engg'},
						{id:1, name:'melissa', title:'senior dev engg'}));
console.log(deepCompare({id:1, name:'mel', title:'senior dev engg'},
						{id:1, name:'mel', title:'senior dev engg', age:24}));
//console.log(deepCompare(5,5));








