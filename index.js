let mapToNegativize = (sourceArray) => {
	let arr = [];
	for (let i = 0; i < sourceArray.length; i++) {
		arr.push(-1 * sourceArray[i]);
	}
	return arr;
};

let mapToNoChange = (sourceArray) => {
	let arr = [];
	for (let i = 0; i < sourceArray.length; i++) {
		arr.push(sourceArray[i]);
	}
	return arr;
};

let mapToDouble = (sourceArray) => {
	let arr = [];
	for (let i = 0; i < sourceArray.length; i++) {
		arr.push(2 * sourceArray[i]);
	}
	return arr;
};

let mapToSquare = (sourceArray) => {
	let arr = [];
	for (let i = 0; i < sourceArray.length; i++) {
		arr.push(sourceArray[i] * sourceArray[i]);
	}
	return arr;
};

let reduceToTotal = (sourceArray, startingPoint = 0) => {
	let total = startingPoint;
	for (let i = 0; i < sourceArray.length; i++) {
		total = total + sourceArray[i];
	}
	return total;
};

let reduceToAllTrue = (sourceArray) => {
	let ifAnyFalse = false;
	for (let i = 0; i < sourceArray.length; i++) {
		!!sourceArray[i] === true ? true : (ifAnyFalse = true);
	}
	return ifAnyFalse === true ? false : true;
};

let reduceToAnyTrue = (sourceArray) => {
	let ifAnyTrue = false;
	for (let i = 0; i < sourceArray.length; i++) {
		!!sourceArray[i] === true ? (ifAnyTrue = true) : false;
	}
	return ifAnyTrue === true ? true : false;
};
