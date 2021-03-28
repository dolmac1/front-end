//보통 비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출

function  c(callback){
    setTimeout(() => {
        callback();
    },1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 수행됩니다.');
});
c(() => {
    c(() => {
        console.log('2000ms 후에 callback 함수가 수행됩니다.');
    });
});