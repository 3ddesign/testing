import { vi } from 'vitest';

export const promices = {
    writeFile: fn.vi((path, data) => {
        return new Promise((resolve, reject) => {
            resolve();
        }) 
    })
}