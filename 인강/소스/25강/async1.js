function p(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// p(1000).then(ms =>{
//     console.log(`${ms} ms 후에 실행된다`);
// });

(async function main(){
    const ms = await p(1000);//1000ms 가지날때까지 기다린다(await함수로)
    console.log(`${ms} ms 후에 실행된다`);
})();
