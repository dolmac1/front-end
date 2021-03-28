// function p(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve('hello');
//         },1000);
//     });
// } // 1000ms 후에 fulfilled 상태로 바꿔주는 함수

// p().then(message => {
//     console.log(message);
// });

function p(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            reject(new Error('bad'));
        },1000);
    });
} // 1000ms 후에 fulfilled 상태로 바꿔주는 함수

p().then(message => {
    console.log(message);
}).catch(error =>{
    console.log(error);
});