const timesTwo = require('./timesTwo');

// // Write the first test
// test('returns ...', () => {
//     expect().toBe()
// });

// const { default: Testrunner } = require("jest-runner");
// const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});
