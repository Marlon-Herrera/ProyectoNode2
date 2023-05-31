const mongoose = require('mongoose');
const Bicicleta = require('../../models/bicicleta');

describe('Testing Bicicletas', function () {
    beforeAll(async () => {
        const mongoDB = 'mongodb://127.0.0.1/red_bicicletas';
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            maxPoolSize: 50,
            wtimeoutMS: 2500,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Bicicleta.deleteMany({});
    });

    describe('Bicicleta.createInstance', () => {
        it('crea una instancia de Bicicleta', () => {
            var bici = Bicicleta.createInstance(2, "azul", "playa", [-35.4, -52.2]);

            expect(bici.code).toBe(2);
            expect(bici.color).toBe("azul");
            expect(bici.modelo).toBe("playa");
            expect(bici.ubicacion[0]).toEqual(-35.4);
            expect(bici.ubicacion[1]).toEqual(-52.2);
        });
    });

    describe('Bicicleta.add', () => {
        it('agregamos solo una bici', async () => {
            const aBici = new Bicicleta({ code: 2, color: "azul", modelo: "playa" });
            try {
                await aBici.save();
                const result = await Bicicleta.find({});
                expect(result.length).toBe(1);
            } catch (err) {
                fail(err);
            }
        });
    });
});


// var mongoose = require('mongoose');
// var Bicicleta = require('../../models/bicicleta');

// describe('Testing Bicicletas', function () {
//     beforeEach(function (done) {
//         var mongoDB = 'mongodb://127.0.0.1/testdb';
//         mongoose.connect(mongoDB, {
//             maxPoolSize: 50,
//             wtimeoutMS: 2500,
//         });

//         const db = mongoose.connection;
//         db.on('error', console.error.bind(console, 'connection error'));
//         db.once('open', function () {
//             console.log('We are connected to test database!');
//             jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
//             done();
//         });
//     });

    // afterEach(function (done) {
    //     Bicicleta.deleteMany({}, function (err, sucess) {
    //         if (err) console.log(err);
    //         done();
    //     });
    // });

    // afterEach(function (done) {
    //     Bicicleta.deleteMany({}).then((result) => {
    //         console.log(result);
    //         done();
    //     });
    // });

    // describe('Bicicleta.createInstance', () => {
    //     it('crea una instancia de Bicicleta', () => {
    //         var bici = Bicicleta.createInstance(1, "verde", "urbana", [-34.5, -54.1]);

    //         expect(bici.code).toBe(1);
    //         expect(bici.color).toBe("verde");
    //         expect(bici.modelo).toBe("urbana");
    //         expect(bici.ubicacion[0]).toEqual(-34.5);
    //         expect(bici.ubicacion[1]).toEqual(-54.1);
    //     })
    // });

    // describe('Bicicleta.allBicis', () => {
    //     it('comienza vacia', (done) => {
    //         Bicicleta.allBicis(function (err, bicis) {
    //             expect(bicis.length).toBe(0);
    //             done();
    //         });
    //     });
    // });

    // describe('Bicicleta.allBicis', () => {
    //     it('comienza vacia', async () => {
    //         try {
    //             const bicis = await Bicicleta.find({});
    //             expect(bicis.length).toBe(0);
    //         } catch (err) {
    //             fail(err);
    //         }
    //     });
    // });


    // describe('Bicicleta.add', () => {
    //     it('agregamos solo una bici', () => {
    //         var aBici = new Bicicleta({ code: 1, color: "verde", modelo: "urbana" });
    //         Bicicleta.add(aBici).then((result) => {
    //             console.log(result);
    //             Bicicleta.allBicis().then((result) => {
    //                 expect(Bicicleta.allBicis.length).toBe(1);
    //                 expect(Bicicleta.allBicis[0]).toBe(a);
    //             });
    //         });

    //     });
    // });

//     describe('Bicicleta.add', () => {
//         it('agregamos solo una bici', async () => {
//             const aBici = new Bicicleta({ code: 1, color: "verde", modelo: "urbana" });
//             try {
//                 await aBici.save();
//                 const result = await Bicicleta.find({});
//                 expect(result.length).toBe(1);
//                 expect(result[0]).toEqual(aBici);
//             } catch (err) {
//                 fail(err);
//             }
//         });
//     });

// });

// ``beforeEach(() => {
//     Bicicleta.allBicis = [];
// });

// describe('Bicicleta.allBicis', () => {
//     it('comienza vacia', () => {
//         expect(Bicicleta.allBicis.length).toBe(0);
//     });
// });

// describe('Bicicleta.add', () => {
//     it('agregamos una', () => {
//         expect(Bicicleta.allBicis.length).toBe(0)
//         var a = new Bicicleta(1, 'rojo', 'urbana', [4.5235149, -74.1222651]);
//         Bicicleta.add(a);
//         expect(Bicicleta.allBicis.length).toBe(1);
//         expect(Bicicleta.allBicis[0]).toBe(a);
//     });
// });

// describe('Bicicleta.findById', () => {
//     it('debe devolver la bici con id 1', () => {
//         expect(Bicicleta.allBicis.length).toBe(0);
//         var aBici = new Bicicleta(1, "verde", "urbana");
//         var aBici2 = new Bicicleta(2, "rojo", "montaña");
//         Bicicleta.add(aBici);
//         Bicicleta.add(aBici2);

//         var targetBici = Bicicleta.findById(1);
//         expect(targetBici.id).toBe(1);
//         expect(targetBici.color).toBe(aBici.color);
//         expect(targetBici.modelo).toBe(aBici.modelo);
//     });
// });``

