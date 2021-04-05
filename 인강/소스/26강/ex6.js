const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); //맨뒤 0은 accumulator의 초기값 current는 배열의 0번부터 넣어서 계산해주는 것
const averages = numbers.reduce((accumulator, current, index, array) => {
    if(index === array.length -1 ){
        return (accumulator + current)/array.length;
    }
    else{
        return accumulator + current;
    }
}, 0);
console.log(sum);
console.log(averages);