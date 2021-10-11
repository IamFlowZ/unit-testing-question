const { default: goodFunc } = require('../good');

describe('good tests', () => {
	test('first function is called', () => {
		const result = goodFunc('a');
		expect(result).toBe(1);
	});


	test('second function is called', () => {
		const result = goodFunc();
		expect(result).toBe(2);
	});
});

jest.mock('../bad', () => {
	const badFunc = jest.requireActual('../bad');

	return {
		__esModule: true,
		...badFunc,
		firstFunc: jest.fn(),
		secondFunc: jest.fn()
	}
})

const badFunc = require('../bad').default;
const firstMock = require('../bad').firstFunc;
const secondMock = require('../bad').secondFunc;

describe('bad tests', () => {
	test('first function is called', () => {
		badFunc('a');
		expect(firstMock.mock.calls.length).toBe(1);
	});

	test('second function is called', () => {
		badFunc();
		expect(secondMock.mock.calls.length).toBe(1);
	});
})