(() => {
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  }

  const greet = (name: string): string => {
    return `Hola ${name}`;
  }

  const saveTheWorld = (): void => {
    console.log('Salvando el mundo');
  }

  let myFunction;

  myFunction = 10;

  console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(1, 2));
})()