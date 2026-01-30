(() => {
  type Avenger = {
    name: string;
    weapon: string;
  }

  const avengers: Avenger[] = [
    { name: 'Ironman', weapon: 'Armorsuit' },
    { name: 'Thor', weapon: 'Mjolnir' },
    { name: 'Hulk', weapon: 'Gamma bomb' },
  ];

  for(const avenger of avengers) {
    console.log(avenger.name.toUpperCase(), avenger.weapon.toUpperCase());
  }
})();