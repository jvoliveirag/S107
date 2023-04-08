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
      
    test('adds -1 + -2 to equal -3', () => {
        expect(sumTest(-1, -2)).toBe(-3);
    });
      
    test('adds 0 + 0 to equal 0', () => {
        expect(sumTest(0, 0)).toBe(0);
    });
      
    test('adds 1.5 + 2.5 to equal 4', () => {
        expect(sumTest(1.5, 2.5)).toBe(4);
    });
      
    test('adds 100 + (-100) to equal 0', () => {
        expect(sumTest(100, -100)).toBe(0);
    });
      
    test('adds 999 + 1 to equal 1000', () => {
        expect(sumTest(999, 1)).toBe(1000);
    });
      
    test('adds -123 + 456 to equal 333', () => {
        expect(sumTest(-123, 456)).toBe(333);
    });
      
    test('adds 0.1 + 0.2 to equal 0.3', () => {
        expect(sumTest(0.1, 0.2)).toBeCloseTo(0.3);
    });
      
    test('adds "10" + 5 to equal "105"', () => {
        expect(sumTest("10", 5)).toBe("105");
    });
    
    test('adds "hello" + "world" to equal NaN', () => {
        expect(sumTest("hello", "world")).toBeNaN;
    });
    
});