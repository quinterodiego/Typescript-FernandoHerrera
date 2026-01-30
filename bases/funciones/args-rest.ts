(() => {
  const fullName = (firstName: string, ...args: string[]): string => {
    return `${firstName} ${args.join(' ')}`;
  }

  const name = fullName('Tony', 'Stark', 'Ironman');
  console.log({name});
})();