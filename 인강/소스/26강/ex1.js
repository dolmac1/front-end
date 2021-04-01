const person ={
    name: 'Chovy',
    age: 27
};

function whois(person){
    const{name, age} = person;
    console.log(name, age); //이러면 앞에 person.을 안붙여도 됨
}

whois(person);
