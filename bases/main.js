"use strict";
(() => {
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name + ' - ' + this.age;
        }
    };
    superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName: function () {
            return this.name + ' - ' + this.age;
        }
    };
    console.log(superman.getName());
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Diego',
        age: 40,
        address: {
            id: 1746,
            zip: 1879,
            city: 'Quilmes Oeste'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Rosana',
        age: 40,
        address: {
            id: 1746,
            zip: 1879,
            city: 'Quilmes Oeste'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(edad, estadoCivil, nombre, sexo) {
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.nombre = nombre;
        this.sexo = sexo;
    }
    imprimirBio() {
    }
}
//# sourceMappingURL=main.js.map