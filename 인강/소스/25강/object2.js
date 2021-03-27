
//값을 속성으로 넣기
function A(){
    this.name='Mark';
}

const a = new A();
console.log(a);

//함수를 속성으로 넣기
function B(){
    this.hello = function(){
        console.log('b');
    }
}

const b = new B().hello();

const c = new Object({'a':'mark'});

console.log(c);