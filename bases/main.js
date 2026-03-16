"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor de Mutante');
        }
    }
    const wolverine = new Mutante('Wolverine', 'Logan');
    console.log(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return Avenger.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} (${this.realName})`;
        }
    }
    class Xmen extends Avenger {
        constructor(isMutant) {
            super('Wolverine', 'Logan');
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} (${this.realName}) - Xmen`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameDesdeXmen() {
            return super.getFullName() + ' - Xmen';
        }
    }
    const wolverine = new Xmen(true);
    wolverine.fullName = 'Magneto';
})();
//# sourceMappingURL=main.js.map