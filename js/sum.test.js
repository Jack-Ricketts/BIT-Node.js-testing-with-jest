const sum = require("./sum");

describe('Netinkamo tipo parametrai', () => {
    test('jokiu reiksmiu', () => {
        expect(sum()).toBe('Nera pirmos reiksmes');
    });
});

describe('Tinkamo tipo parametrai, bet neteisingomis reiksmemis', () => {
    test('pirmas parametras yra boolean', () => {
        expect(sum(true, 5)).toBe('Pirmas parametras netinkamo tipo');
    });
});

describe('Tikami parametrai, su teisingom reiksmem', () => {

});