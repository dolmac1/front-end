//getter
const numbers = {
    a: 1,
    b: 2,
    get sum(){
        console.log('sum함수 실행');
        return this.a+this.b;
    }
};

console.log(numbers.sum);

//setter
const dog = {
    _name: '멍멍이',
    set name(value){
        console.log('이름바뀜');
        this._name = value;
    }
}