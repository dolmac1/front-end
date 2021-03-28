//컨스트럭터에서 프로퍼티 생성

class A{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

console.log(new A('Chovy',27));

//class field 는 런타임에서 확인(런타임 버전을 봐야함) - 크롬에서 실행

class B{
    name; // == this.name
    age; // == this.age
}

console.log(new B());

class C{
    name = 'no name';
    age = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Chovy',27));

