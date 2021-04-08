const value = 'hello';

function myFunction(){
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction(){
  const value = 'bye';
  console.log(`otherFunction: ${value}`);
}

myFunction();
otherFunction();