var Bicicleta = require('../../models/bicicleta');

describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.lenght).toBe(0);
    });
});