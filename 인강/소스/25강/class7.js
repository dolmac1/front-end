//super

class Parent{
    name;

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log('hello',this.name);
    }
}

class Child extends Parent{
    age;
    constructor(name,age){
        super(name);
        this.age = age;
    }
    hello(){
        console.log('hello',this.name,this.age);
    }
}



const p = new Parent('Chovy');
const c = new Child('Chovy2',27);

console.log(p,c);