let firstFunction = () => {
	console.log(1);
};

let secondFunction = () => {
	console.log(2);
};

exports.default = (param) => {
	if (param) {
		firstFunction();
	} else {
		secondFunction();
	}
}