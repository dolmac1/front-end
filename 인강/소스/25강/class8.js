//static 상속

class Parent{
    static age = 27;
}

class Child extends Parent{

}


console.log(Parent.age);
console.log(Child.age);