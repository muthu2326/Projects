const first = () => {
    console.log('Hi there!');
    second();
    console.log('The End');
  }
  const second = () => {
    console.log('Hello there!');
  }
  first()