var forEach = function(array,action){
	for(var i=0; i<array.length; i++)
		action(array[i]);
}

var number = [1,2,3,4,5], sum=0; 
forEach(number, function(number){
	sum+=number; 
});
console.log(sum);
/*----------------------------------------------------------*/
var greaterThan = function (m){
	return function(n){
		return(n>m); 
	}
}

var greaterThan10 = greaterThan(10); 

console.log(greaterThan10(20));

/*----------------------------------------------------------*/
var ancestry_file = require('./ancestry_file'); 
var ancestry_array = JSON.parse(ancestry_file);

console.log("/*----------------------------------------------*/");


function filter(array,test){
	var passed=[];
	for(var i=0; i< array.length; i++){
		if(test(array[i]))
			passed.push(array[i]); 
	}
	return passed; 
}
console.log('filter born between 1990 and 1925');
console.log(filter(ancestry_array, function(person){
	return person.born > 1900 && person.born < 1925;
}));
console.log('filter Father - Carel Haverbeke');
console.log(filter(ancestry_array, function(person){
	return person.father == "Carel Haverbeke";
}));


console.log("/*----------------------------------------------*/");

function map(array,transform){
	var mapped=[];

	for(var i=0;i<array.length; i++)
		mapped.push(transform(array[i]));

	return mapped;
}

var overNinety = ancestry_array.filter(function(person){
	return person.died - person.born > 90
});
console.log('Over Ninety');
console.log(map(overNinety, function(person){
	return person.name; 
}));


console.log("/*----------------------------------------------*/");
console.log("/* Reduce*/");

function reduce(array, combine,start){
	var current = start; 
	for(var i=0; i<array.length; i++)
		current = combine(current, array[i]);
	return current; 
}

console.log(reduce([1,2,3,4], function(a,b){
	return a+b;
}, 0));

console.log("/*----------------------------------------------*/");
console.log("/* Reduce*/");

console.log(ancestry_array.reduce(function(min,cur){
	if(cur.born < min.born) 
		return cur; 
	else return min; 
}));


console.log("/*----------------------------------------------*/");
console.log("/* Min */");

var min = ancestry_array[0];
for(var i=0; i< ancestry_array.length; i++){
	var cur= ancestry_array[i];
if(cur.born < min.born)
	min = cur;
};
console.log(min); 

function average(array){
	function plus(a,b){return a+b;}
	return array.reduce(plus)/array.length;
}
function age(p){return p.died - p.born}
function male(p){return p.sex == "m" }
function female(p){return p.sex =="f"}

console.log(average(ancestry_array.filter(male).map(age)));

console.log(average(ancestry_array.filter(female).map(age)));


console.log("/*----------------------------------------------*/");
console.log("/* Great - great - greate */");

var byName = {};
ancestry_array.forEach(function(person){
	byName[person.name] = person; 
});

console.log(byName["Philibert Haverbeke"]);


function reduceAncestors(person, f, defaultValue){

	function valueFor(person){

		if(person == null)
			return defaultValue; 
		else
			return f(person, valueFor(byName[person.mother]), 
							 valueFor(byName[person.father]));
	}
	return valueFor(person);
}

console.log("/*----------------------------------------------*/");
console.log("/* shared DNA */");

function sharedDNA(person, fromMother, fromFather){
	if(person.name == "Pauwels van Haverbeke")
		return 1 ;
	else 
		return (fromMother + fromFather)/2;

}	

var ph = byName['Philibert Haverbeke'];
console.log(reduceAncestors(ph, sharedDNA, 0)/4);


console.log("/*----------------------------------------------*/");
console.log("/* count Ancestors */");

function countAncestors(person, test){
	function combine(person, fromMother, fromFather){
		var thisOneCounts = test(person); 
		return fromMother + fromFather + (thisOneCounts ? 1:0); 
	}
	return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person){
	var all = countAncestors(person, function(person){
		return true; 
	});

var longLiving = countAncestors(person, function(person){
	return (person.died - person.born) >= 70;
});

return longLiving/all;
}

console.log(longLivingPercentage(byName["Emile Haverbeke"]));


console.log("/*----------------------------------------------*/");
console.log("/* Binding */");

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set,person){
	return set.indexOf(person.name) > -1;
}

console.log(ancestry_array.filter(function(person){
	return isInSet(theSet, person);
}));

console.log(ancestry_array.filter(isInSet.bind(null,theSet)));







































