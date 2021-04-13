import React from 'react';

function Hello({color, name, isSpecial}){
    console.log(color);
    return (
        <div style={{
            color: color
        }}>
            {isSpecial?"☆":""}안녕하세요 {name} {isSpecial&&<b>★</b>}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;