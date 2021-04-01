const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for(let i=0;i<superheros.length;i++){
    console.log(superheros[i]);
}
// 같은 방법인데 forEach문 사용
superheros.forEach(hero => {
    console.log(hero);
});