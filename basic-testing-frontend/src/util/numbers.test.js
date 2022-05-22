import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('shoud transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input)
    expect(result).toBeTypeOf('number');
});

it('shoud yield NaN for a non-transformable numbers', () => {
    const input = 'invalid';

    const result = transformToNumber(input)
    
    expect(result).toBeNaN();
});