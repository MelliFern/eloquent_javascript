var min = function(val1, val2){
	return (val1<val2 ? val1:val2);
}

console.log(min(100, 20));
console.log(min(20, 20));
console.log(min(-100, 20));

console.log(min('aaa', 'bbb'));
