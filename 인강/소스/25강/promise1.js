//promise의 정보

console.log(Promise);

//생성자를 통해서 프로미스 객체를  만들 수 있음
//new Promise(/*executor */);

// new Promise((resolve, reject) => {
//     //
//     //
//     //
// }); //현재 pending 상태


// new Promise((resolve, reject) => {
//     //
//     //
//     //
//     resolve();
// }); //현재 fulfilled 상태

// new Promise((resolve, reject) => {
//     //
//     //
//     //
//     reject();
// }); //현재 rejected 상태

const p = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve();
    },1000);
});//1초후에 resolve됨

p.then(()=>{// callback
    console.log('1000ms 후에 실행됨');
});// promise 객체가 resolve된 후에 실행