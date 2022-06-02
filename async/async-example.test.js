import { it, expect } from 'vitest';
import { generateToken } from './async-example';

it('should generate a token value', (done, ) => {
    const testUserEmail = 'test@test.com'

    generateToken(testUserEmail, (error, token) => {
        // expect(token).toBeDefined();
        try {
            // expect(token).toBe(2);
            expect(token).toBeDefined();
            done();
        } catch (error) {
            done(error);
        }
    })
});