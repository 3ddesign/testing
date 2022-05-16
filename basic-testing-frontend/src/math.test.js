import { it, expect } from 'vitest';
import { add } from './math';

it('should summiraze all values', () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6);
});