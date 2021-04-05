class Animal{
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log(this.sound);
    }
}

class Dog extends Animal{
    constructor(name,sound){
        super('고양이',name,sound);
    }
}

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();

const dog2 = new Dog('멍멍이','멍멍');
dog2.say();