const n= 30;
const multipleOfThree = n%3 === 0;
const multipleOfFive = n%5 === 0;

if(multipleOfThree && multipleOfFive){
    console.log('15의배수');
}
else if(multipleOfFive){
    console.log('5의배수');
}
else if(multipleOfThree){
    console.log('3의배수');
}
else{
    console.log('아무것도 아님');
}