const { default: goodFunc } = require('../good');
const rewire = require('rewire')

// the "Javascript" way of doing things
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

// the "python" way of doing
jest.mock('../bad', () => {
	const badFunc = jest.requireActual('../bad');

	return {
		__esModule: true,
		...badFunc,
		firstFunction: jest.fn(),
		secondFunction: jest.fn()
	}
})

const badFunc = require('../bad').default;
const firstMock = require('../bad').firstFunction;
const secondMock = require('../bad').secondFunction;

describe('bad tests', () => {
	test('first function is called', () => {
		badFunc('a');
		expect(firstMock.mock.calls.length).toBe(1);
	});

	test('second function is called', () => {
		badFunc();
		expect(secondMock.mock.calls.length).toBe(1);
	});
});

const rewiredModule = rewire('../bad');
describe('rewired module', () => {
	const firstMock = jest.fn()
	const secondMock = jest.fn()

	beforeAll(() => {
		rewiredModule.__set__('firstFunction', firstMock)
		rewiredModule.__set__('secondFunction', secondMock)
	})

	test('first function is called', () => {
		rewiredModule.default('1');
		expect(firstMock.mock.calls.length).toBe(1);
	})
});