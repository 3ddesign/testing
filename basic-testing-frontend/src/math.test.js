import { it, expect } from 'vitest';
import { add } from './math';

it('should summiraze all values', () => {

    // Arrange 
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce(
        (previous, current) => previous + current, 0);

    // Act 
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
});

it('should yield if at least one invalid number is provided ', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric is provided', () => {
    const numbers = ['1', '2'];

    const result = add(numbers);

    const expectedResult = numbers.reduce(
        (previous, current) => +previous + +current, 0);

    expect(result).toBe(expectedResult);
});