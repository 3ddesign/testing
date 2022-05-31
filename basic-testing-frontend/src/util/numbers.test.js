import { describe, it, expect } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber', () => {
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
});


describe('cleanNumbers()', () => {
    it('should return array of values (also integration test - include combination of functions)', () => {
        const numberValues = ['1', '2']
   
        const cleanedNumbers = cleanNumbers(numberValues);

        // expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers[0]).toEqual([1, 2]);
    });

    it('should throw an error if an array as at least one empty string', () => {
        const numberValues = ['', 1];

        const cleanFn = () => cleanNumbers(numberValues)

        expect(cleanFn).toThrow();
    });
});