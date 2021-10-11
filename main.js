const firstFunction = () => {
	return 1;
}

const secondFunction = () => {
	return 2;
}

exports.default = (param) => {
	if (param) {
		return firstFunction();
	}
	return secondFunction();
}