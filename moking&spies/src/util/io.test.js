import { it, expect } from 'vitest';

if('shoud exeucte the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});