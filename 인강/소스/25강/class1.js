class A{
    constructor(){
        console.log('hello');
    }
}

console.log(new A());

class B{
    constructor(name, age){
        console.log('constructor',name,age);
    }
}

console.log(new B('Chovy',27));