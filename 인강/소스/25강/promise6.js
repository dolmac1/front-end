function p(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve();
        },1000);
    });
}

p().then(()=>{
    console.log('1');
    return p();//1초 더 쉼
});