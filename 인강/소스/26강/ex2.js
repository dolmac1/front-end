const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say : function(){
        console.log(this.sound);
    }
}

const cat = {
    name: '야옹이',
    sound: '야옹',
}

cat.say = dog.say;
dog.say();
cat.say();