var programmingLanguages = ['javascript', 'PHP', 'python'];
console.log(programmingLanguages);

console.log(programmingLanguages[0]);

programmingLanguages.push('java');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.unshift('c#');
console.log(programmingLanguages);

programmingLanguages.shift();
console.log(programmingLanguages);

programmingLanguages.splice(0, 2, 'ruby');
console.log(programmingLanguages);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));

var students = ['mjellma', 'rita'];
var [s1,s2] = students;
console.log(s1);
console.log(s2);

var places = ["london", "paris", "new york", "berlin"];
var[firstplace, secondplace] = places;
console.log(secondplace);

var numbers = [1,2,3,4,5,6,7,8,9,10];
var[first, second, ...othernumbers] = numbers;
console.log(first);
console.log(second);
console.log(othernumbers.toString());