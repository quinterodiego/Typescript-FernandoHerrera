(() => {
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log('Constructor de Mutante');
    }
  }

  const wolverine = new Mutante('Wolverine', 'Logan');
  console.log(wolverine);
})();