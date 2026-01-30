(() => {

  // type Avenger = {
  //   nickFury: string;
  //   ironman: string;
  //   vision: string;
  //   activos: boolean;
  //   poder: number;
  // }

  // const avenger: Avenger = {
  //   nickFury: 'Samuel L. Jackson',
  //   ironman: 'Robert Downey Jr.',
  //   vision: 'Paul Bettany',
  //   activos: true,
  //   poder: 1500
  // }

  // // const { poder, vision } = avenger;
  // // console.log(poder.toFixed(2), vision.toUpperCase());

  // const printAvenger = ({ nickFury, ironman, vision, activos, poder }: Avenger) => {
  //   console.log(nickFury, ironman, vision, activos, poder);
  // }

  const avengerArray: [string, string, string, boolean, number] = ['Samuel L. Jackson', 'Robert Downey Jr.', 'Paul Bettany', true, 1500];
  const [nickFury, ironman, vision, activos, poder] = avengerArray;
  console.log({ nickFury, ironman, vision, activos, poder });
})();