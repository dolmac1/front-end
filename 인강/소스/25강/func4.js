function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('mark','27');

console.log(p, p.name, p.age);

const a= new Person('chovy', '27');

console.log(a, a.name, a.age);