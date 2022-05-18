import React from "react";
import "./Counter.css";

let incri = {
    width:"250px",
    margin:"auto",
    height:"50px",
    borderRadius: "15px",
}

const Counter = () => {

    const [count, setCount] = React.useState(0)

    // function for increament
    const increament = () => {
        setCount(count + 1)
        
    }

    // function for decreament
    const decreament = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    // function for double
    const double = () => {
        setCount(count * 2);
    }

    return (
        <div className="position">
            <h1 style = {incri} className = {count % 2 === 0 ? "positive" : "negative"}>Counter: {count}</h1>
            <button className="btn1" onClick = {increament}>Increament</button> <br/>
            <button className="btn2" onClick = {decreament}>Decreament</button> <br/>
            <button className="btn3" onClick = {double}>Double</button>
        </div>
    )
}

export {Counter};