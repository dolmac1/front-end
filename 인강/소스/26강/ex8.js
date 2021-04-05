// function Animal(type, name, sound){
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//     this.say = function (){
//         console.log(this.sound);
//     }
// }

function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function(){
    console.log(this.sound);
  } //함수를 재사용하고 싶을 때 prototype을 사용
  
  const dog = new Animal('개','멍멍이','멍멍');
  const cat = new Animal('고양이','야옹이','야옹');
  
  function Dog(name, sound){
    Animal.call(this, '개', name, sound);
  }
  
  function Cat(name, sound){
    Animal.call(this, '고양이', name, sound);
  }
  
  Dog.prototype = Animal.prototype;
  Cat.prototype = Animal.prototype;
  const dog2 = new Dog('멍멍쿤','왈왈');
  const cat2 = new Cat('야옹쿤','야옹');
  
  dog2.say()
  cat2.say()