//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*var evenNumbers = numbers.filter(function (number) {
	return (number % 2 === 0);
});
console.log(evenNumbers);

var total=[];
for(var i=0;i<numbers.length;i++){
	if(numbers[i]% 2 === 0)
		total.push(numbers[i]);
}
console.log(total);
*/
var numbers = [1,2,4,5,6,7,8,9,10];

var explan=[];
for (var i = 0; i < numbers.length; i++) {
 	if(numbers[i] === 100)
		explan.push(numbers[i]);
}

console.log(explan);