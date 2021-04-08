const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
}

const {color, ...rest} = purpleCuteSlime;

console.log(rest);

//함수로써 활용
function sum(...rest){
    return rest.reduce((acc, current) => acc+current, 0);
  }
  
  console.log(sum(1,2,3,4,5,6,7));