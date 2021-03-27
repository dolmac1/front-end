const a = {};

console.log(a, typeof a);

const b = {
    name: 'mark',
    hello1(){
        console.log('hello1',this.name);
    }
}

console.log(b, typeof b);