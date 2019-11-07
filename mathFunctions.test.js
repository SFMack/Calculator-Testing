const { sum } = require('./mathFunctions');

// let expected = 4;
// let first = 2;
// let second = 3;

// let actual = sum(first, second);

// if (actual !== expected) {
// 	console.log(
// 		`TEST FAILURE: Actual value = ${actual}. Expected value = ${expected} `
// 	);
// }

describe('sum function', () => {
	it('adds two numbers'),
		() => {
			// Arrange
			let expected = 4;
			let first = 2;
			let second = 2;

			// Act
			let actual = sum(first, second);

			// Assert
			expect(actual).toBe(expected);
		};
});
