// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	var accumulator;
	if (arguments[2] === undefined) {
		accumulator = arr[0];
		for (let i = 1; i < arr.length; i++) {
			accumulator = callback(accumulator,arr[i], i, arr);
		}
		return accumulator;
	}else{
		accumulator = arguments[2];
		for (let i = 0; i < arr.length; i++) {
			accumulator = callback(accumulator, arr[i], i, arr);
		}
		return accumulator;
	}

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
