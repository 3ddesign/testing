import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('shoud transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input)
    expect(result).toBeTypeOf('number');
});

it('shoud yield NaN for a non-transformable numbers', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});