// function isAnimal(text){
//   return (text === '개' || text === '말');
// }

function isAnimal(text) {
    const animals = ["개", "말", "호랑이"];
    return animals.includes(text);
  }
  
  console.log(isAnimal("개"));
  console.log(isAnimal("고양이"));
  