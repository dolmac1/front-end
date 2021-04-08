const numbers = [1,2];

function sub(a,b){
    return a-b;
}

const result = sub(...numbers);

console.log(result);

// max 값을 가져오는 함수를 spread로 만들어보자
function max(...spread){
    return spread.reduce((acc, account) => acc>account?acc:account,0);
  }
  
  const numbers = [1,2,3,6,8,4,234,5,123,6];
  const result = max(...numbers);
  
  console.log(result);