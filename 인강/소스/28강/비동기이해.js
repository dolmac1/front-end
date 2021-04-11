function work(callback){
    setTimeout(() => {
      const start = Date.now();
      for(let i=0; i< 1000000000;i++){
      
      }
      const end = Date.now();
      console.log(end - start + 'ms');
      callback(end-start);
    },0)
    
  }
  console.log('작업시작');
  work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms시간이 걸렸어요');
  });
  
  console.log('다음작업');//원래는 work가 다 진행된 후에 수행되는데 setTimeout을 설정해주면 비동기로 실행
  