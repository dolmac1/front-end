import React, {useState} from 'react';

function Counter(){
    //const number = document.getElementById("number");
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number+1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    return(
        <div>
            <h1 name="number" id="number">{number}</h1>
            <button id="plus" onClick={onIncrease}>+1</button>
            <button id="minus" onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;