(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName: () => string;
  }

  let myCustomVariable: string | number | Hero = 'Doctor Strange';

  console.log(typeof myCustomVariable);

  myCustomVariable = 20;

  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Bruce Wayne',
    age: 40,
    powers: ['Super fuerza', 'Super velocidad'],
    getName: () => 'Bruce Wayne'
  }

  console.log(typeof myCustomVariable);
  console.log(myCustomVariable)
})();