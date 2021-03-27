function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('hello',this.name,this.age);
    // }
}

Person.prototype.hello = function(){
    console.log('hello', this.name, this.age);
}

const p = new Person('Chovy', 27);

p.hello();
console.log(p.toString); // 우리가 작성한 것은 아니지만 사용할 수 있음

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);//이건 9번재줄 처럼 따로 지정해줘야 사용 가능

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); // p 가 Person으로 부터 나온 객체인가
console.log(p instanceof Object);