import { useState } from "react";

function Counter(){

    const [number, setNumber] = useState(0);
    function handleAdd(){
        if (number<10){
            setNumber(number + 1)
        } else {
            alert("Number cannot exceed 10")
        }
    }

    function handleSub(){
        if (number>0){
            setNumber(number - 1) 
        } else {
            alert("Number cannot go below 0")
        }
    }

    return (
        <div id="main">
        <h1 id="heading">Counter is at {number}</h1>
        <button id="button" onClick={handleAdd}>Add Number</button>
        <button id="button" onClick={handleSub}>Minus Number</button>
        </div>
    )
}

export default Counter