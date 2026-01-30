"use strict";
(() => {
    const avengerArray = ['Samuel L. Jackson', 'Robert Downey Jr.', 'Paul Bettany', true, 1500];
    const [nickFury, ironman, vision, activos, poder] = avengerArray;
    console.log({ nickFury, ironman, vision, activos, poder });
})();
(() => {
    const avengers = [
        { name: 'Ironman', weapon: 'Armorsuit' },
        { name: 'Thor', weapon: 'Mjolnir' },
        { name: 'Hulk', weapon: 'Gamma bomb' },
    ];
    for (const avenger of avengers) {
        console.log(avenger.name.toUpperCase(), avenger.weapon.toUpperCase());
    }
})();
(() => {
    const nombre = "Diego";
    const getName = () => {
        console.log("Viejo nombre");
    };
})();
//# sourceMappingURL=main.js.map