import { it, expect, vi } from 'vitest';
import { promices as fs } from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    };
});

it('shoud exeucte the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName)

    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    // expect(fs.writeData).toBeCalled();
    expect(fs.writeData).toBeCalledWith(testFileName, testData);
});