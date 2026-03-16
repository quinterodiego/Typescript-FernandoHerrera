(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) {
      // console.log('Constructor de Avenger');
    }

    protected getFullName() {
      return `${this.name} (${this.realName})`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      public isMutant: boolean
    ) {
      super('Wolverine', 'Logan');
    }

    get fullName() {
      return `${this.name} (${this.realName}) - Xmen`;
    }

    set fullName(name: string) {
      this.name = name;
    }

    getFullNameDesdeXmen() {
      return super.getFullName() + ' - Xmen';
    }
  }

  const wolverine = new Xmen(true);
  // console.log(wolverine.fullName);

  wolverine.fullName = 'Magneto';
  // console.log(wolverine.fullName);
})()