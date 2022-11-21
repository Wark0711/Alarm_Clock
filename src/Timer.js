import React from 'react'
import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import './Timer.css';

function Timer() {

    const [isActive, setIsActive] = useState(false)
    const rev = useRef(0)
    const [text, setText] = useState('Start')
    const [, setRender] = useState('')
    const count = useRef(0)
    let interval = useRef()

    function Btn() {
        if (isActive === true) {
            setText('Start')
            clearInterval(interval.current)
            return setIsActive(false)
        }
        setText('Pause')
        setIsActive(true)
        interval.current = setInterval(() => {
            count.current--
            setRender(prevrender => prevrender + 1)

            if (count.current % 240 === -0) {
                rev.current++
            }
        }, 250);
    }

    function Reset() {
        clearInterval(interval.current)
        count.current = 0
        rev.current = 0
        setRender(0)
    }

    return (
        <div className="Timer">
             <h2>Analogue Timer</h2>
            <div className="containers">
                <div className="circles"></div>
                <div className="liners" id="needle" style={{ transform: `rotate(${count.current * 1.5}deg)` }}></div>
            </div>
            <div className="timers">
                <button className="btns" id="start" onClick={Btn}>{text}</button>
                <button className="btns" id="reset" onClick={Reset}>Reset</button>
                <div className="rtns">No. of Revolutions: {rev.current}</div>
                <div className="rtns count">Count: {count.current*(-1)}</div>
            </div>
            <Link to='/' className='links'>Go to Analogue Clock</Link>
        </div>
    )
}

export default Timer