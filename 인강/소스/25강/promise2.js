function p(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve();
        },1000);
    });
} // 1000ms 후에 fulfilled 상태로 바꿔주는 함수

p().then(() => {
    console.log('1000ms 후 실행');
});