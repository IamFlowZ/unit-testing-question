const {default: main} = require('../main');

describe('main tests', () => {
	test('first function is called', () => {
		const result = main('a');
		expect(result).toBe(1);
	});


	test('second function is called', () => {
		const result = main();
		expect(result).toBe(2);
	});
})