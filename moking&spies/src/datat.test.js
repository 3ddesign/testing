import { describe, it, expect, vi, } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
    it('it should execute logFn is provided', () => {
        const logger = vi.fn();

        generateReportData(logger);

        expect(logger).toBeCalled();
        // expect(logger).toBeCalledTimes(2);
        // expect(logger).toBeCalledWith();
    });
});