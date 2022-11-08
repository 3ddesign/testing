import { exitCode } from 'process';
import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done, ) => {
    const testUserEmail = 'test@test.com'

    generateToken(testUserEmail, (error, token) => {
        expect(token).toBeDefined();
        try {
            expect(token).toBe(2);
            expect(token).toBeDefined();
            done();
        } catch (error) {
            done(error);
        }
    })
});

if('shoud ganarate token with promise', () => {
    const testUserEmail = 'test@test.com'

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

if('shoud ganarate token async/await', async () => {
    const testUserEmail = 'test@test.com'
    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
});