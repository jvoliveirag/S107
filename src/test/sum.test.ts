const sumTest = require('../main/sum');

describe('Testing the sum function', () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(sumTest(1, 2)).toBe(3);
    });
      
    test('adds "1" + 2 to equal 12', () => {
        expect(sumTest('1', 2)).toBe("12");
    });
      
    test('Should not be null', () => {
        expect(sumTest(1, 2)).not.toBeNull();
    });
      
    test('Should be a number', () => {
        expect(sumTest(1, 2)).not.toBeNaN();
    });

});