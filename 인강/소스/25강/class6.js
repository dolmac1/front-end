//상속

class Parent{
    name='KIM';

    hello(){
        console.log('hello',this.name);
    }
}

class Child extends Parent{

}

const p = new Parent();
const c = new Child();

console.log(p);
console.log(c);
c.name = 'Yong';
p.hello();
c.hello();


//변수, 함수 추가 및 오버라이딩

class Parent2{
    name = 'Kim';
    hello(){
        console.log('hello',this.name);
    }
}

class Child2 extends Parent2{
    age = 27;

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p2= new Parent2();
const c2= new Child2();

p2.hello();
c2.hello();