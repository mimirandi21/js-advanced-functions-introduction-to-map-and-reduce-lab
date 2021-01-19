let mapToNegativize = (sourceArray) => {
	return sourceArray.map((x) => x * -1);
};

let mapToNoChange = (sourceArray) => {
	return sourceArray.map((x) => x);
};

let mapToDouble = (sourceArray) => {
	return sourceArray.map((x) => x * 2);
};

let mapToSquare = (sourceArray) => {
	return sourceArray.map((x) => x * x);
};

let reduceToTotal = (sourceArray, startingPoint = 0) => {
	let reducer = (acc, cv) => acc + cv;
	return sourceArray.reduce(reducer, startingPoint);
};

let reduceToAllTrue = (sourceArray) => {
	let ifAnyFalse = false;
	for (let i = 0; i < sourceArray.length; i++) {
		!!sourceArray[i] === true ? true : (ifAnyFalse = true);
	}
	return ifAnyFalse === true ? false : true;
	// let reducer = (acc, cv) => acc + cv;
	// return !!sourceArray.reduce(reducer) === true ? true : false;
};

let reduceToAnyTrue = (sourceArray) => {
	let reducer = (acc, cv) => acc + cv;

	return !!sourceArray.reduce(reducer) === true ? true : false;
};
