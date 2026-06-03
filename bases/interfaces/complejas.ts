(() => {

  interface Client {
    name: string;
    age: number;
    address: Address
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const client: Client = {
    name: 'Diego',
    age: 40,
    address: {
      id: 1746,
      zip: 1879,
      city: 'Quilmes Oeste'
    }
  }

  const client2: Client = {
    name: 'Rosana',
    age: 40,
    address: {
      id: 1746,
      zip: 1879,
      city: 'Quilmes Oeste'
    }
  }

})();