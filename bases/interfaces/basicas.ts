(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName: () => string;
  }
  
  let superman: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
    getName() {
      return this.name + ' - ' + this.age;
    }
  }

  superman = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad'],
    getName: function () {
      return this.name + ' - ' + this.age;
    }
  }

  console.log(superman.getName())
})();