// const slime = {
//     name: '슬라임'
// }

// const cuteSlime = {
//     name: '슬라임',
//     attribute: 'cute'
// }

// const purpleCuteSlime = {
//     name: '슬라임',
//     attribute: 'cute',
//     color: 'purple'
// }

const slime = {
    name: '슬라임'
  }
  
  const cuteSlime = {
    ...slime,
    attribute: 'cute'
  }
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
  }
  
  console.log(purpleCuteSlime);
  