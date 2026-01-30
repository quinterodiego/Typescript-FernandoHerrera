(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activeBatiSignal = (): string => {
    return 'Batiseñal activada';
  }

  console.log(typeof activeBatiSignal);

  const heroName = returnName();
  console.log('El nombre de mi heroe es: ', heroName);
})();