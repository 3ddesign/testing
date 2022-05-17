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