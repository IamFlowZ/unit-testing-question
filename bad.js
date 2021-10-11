exports.firstFunction = () => {
	console.log(1);
};

exports.secondFunction = () => {
	console.log(2);
};

exports.default = (param) => {
	if (param) {
		exports.firstFunction();
	} else {
		exports.secondFunction();
	}
}