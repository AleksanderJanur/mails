import React from 'react'

const Alert = () =>{
    const funkcja = () =>{
        console.log("CHUJ")
        fetch('http://localhost/api/dupa')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <div onClick={funkcja}>dupa</div>
    )
}

export default Alert