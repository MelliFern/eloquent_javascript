var ArraySeq 				= function(array){
								this.pos = -1; 
								this.array = array; 
							};

ArraySeq.prototype.next 	= function(){
								this.pos++;
								if(this.pos >= this.array.length)
									return false; 
								return this.array[this.pos];
							};	
ArraySeq.prototype.current	= function(){
								return this.array[this.pos];
							}


var RangeSeq 				= function(start, end){
								this.range =[]; 
								this.pos = -1;
								for(var i=start; i<=end; i++)
									this.range.push(i);
							};

RangeSeq.prototype.next 	= function(){
								this.pos++;
								if(this.pos>= this.range.length )
									return false;
								return this.range[this.pos];
							};

RangeSeq.prototype.current	= function(){
								return this.range[this.pos];
							}

var logFive					= function(object){
								for(var i=0; i<5;i++){
									if(!object.next())
										break;
									console.log(object.current());
								}
							};
console.log("\nArraySeq\n");
logFive(new ArraySeq([1,23,433,4534,123]));

console.log("\nRangeSeq\n");
logFive(new RangeSeq(10,23));


/*
var array2 = new RangeSeq(10,23);
console.dir(array2);
for(var i=0;i<3; i++)
	console.log(array2.next());

console.log("\nArraySeq\n")


var array1 = new ArraySeq([1,23,433,4534,123]);
for(var i=0;i<3; i++)
	console.log(array1.next());*/