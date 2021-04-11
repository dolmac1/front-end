// function increasAndprint(n, callback){
//   setTimeout(() => {
//       const increased = n+1;
//       console.log(increased);
//       if(callback){
//         callback(increased);
//       }
//   },1000)
// }

// increasAndprint(0, n=> {
//   increasAndprint(0, n=>{
//     increasAndprint(0,n=>{
//       console.log('작업끝');
//     })
//   })
// })

//기본 프로미스 사용법
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('result');
      reject(new Error());
    }, 1000);
  });
  
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
  
  //increaseAndPrint 를 프로미스로
  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value == 5) {
          const error = new Error();
          reject(error);
          return;
        }
        resolve(value);
      }, 1000);
    });
  }
  
  increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch((e) => {
      console.log(e);
    });
  