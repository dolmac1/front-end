// static 변수, 함수

class A{
    static age = 27;
    static hello(){
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();


//원래는 말도안되는 문법임
class B{
    age = 27;
    static hello(){
        console.log(this.age);
    }
}

console.log(B,B.age);
B.hello();
