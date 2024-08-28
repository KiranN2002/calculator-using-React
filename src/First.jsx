/*import {useState,useEffect} from 'react'
const First = (props) => {
   // const {name,color,year}=props.myCar

    // const [state,setstate] = useState('ram')
    //const [city, setCity] = useState('Bangalore')

    const [number, setNumber] = useState(1)
    const increment =()=>{
        setNumber(number+1)
        }
    const decrement =()=>{
            setNumber(number-1)
            }
   /* useEffect(()=>{ if(city === 'delhi'){
                setCity('Jaipur')
                }
            else{
                setCity('Goa')
                }
                },[])*/

   // return (
       /* <div>
            <h1>{name}</h1>
            <h1>{color}</h1>
            <h1>{year}</h1>
        </div>*/
          /* <div>
               <h1>{number}</h1>
               <button onClick={increment}> Increment </button>
               <button onClick={decrement}> Decrement </button>
               </div>
           );
}
export default First*/

import { useState } from 'react';

const First = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(null);
    const [inputField, setInputField] = useState(1); // 1 for number1, 2 for number2

    const handleNumberClick = (digit) => {
        if (inputField === 1) {
            setNumber1(number1 + digit);
        } else {
            setNumber2(number2 + digit);
        }
    };

    const handleClear = () => {
        if (inputField === 1) {
            setNumber1('');
        } else {
            setNumber2('');
        }
    };

    const handleInputSwitch = () => {
        setInputField(inputField === 1 ? 2 : 1);
    };

    const add = () => setResult(parseFloat(number1) + parseFloat(number2));
    const subtract = () => setResult(parseFloat(number1) - parseFloat(number2));
    const multiply = () => setResult(parseFloat(number1) * parseFloat(number2));
    const divide = () => setResult(parseFloat(number1) / parseFloat(number2));

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div>
                <input
                    type="text"
                    value={number1}
                    readOnly
                    placeholder="Enter first number"
                    onClick={() => setInputField(1)}
                />
                <input
                    type="text"
                    value={number2}
                    readOnly
                    placeholder="Enter second number"
                    onClick={() => setInputField(2)}
                />
            </div>
            <div className="number-pad">
                {Array.from({ length: 10 }, (_, i) => (
                    <button key={i} onClick={() => handleNumberClick(i.toString())}>{i}</button>
                ))}
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleInputSwitch}>Switch Input</button>
            </div>
            <div className="buttons">
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
            </div>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default First;