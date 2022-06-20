import { it, expect, vi } from 'vitest';
import { promices as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

it('shoud exeucte the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName)

    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    expect(fs.writeData).toBeCalled();
});