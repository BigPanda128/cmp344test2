/*Ryan Postma
 * CMP344
 * Exam 2
 * Javascript 101 problem 1
 * random array
 */

//creat array
var arr = [];

//fill array
for (var i = 0; i < 20; ++i) {
	arr.push(Math.floor(Math.random() * (201 - 10)) + 10);
}

//print array
print(arr);
