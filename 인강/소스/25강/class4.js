//get set

class A{
    _name = 'no name';

    get name(){
        return this._name +'@@@';
    }

    set name(value){
        this._name = value+'!!!';
    }
}

const a = new A();

console.log(a);
a.name = 'Chovy'; //set
console.log(a);
console.log(a.name);//get
console.log(a._name);//_name을 표시
