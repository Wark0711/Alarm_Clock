import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './Clock.css';

function Clock() {
  const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dateVal = new Date().getDate()
  let dayVal = new Date().getDay()
  let atime = document.querySelector('#alarm-time')
  // let audio = new Audio('alarm.wav')

  const [secRatio, setSecRatio] = useState(0)
  const [minRatio, setMinRatio] = useState(0)
  const [hourRatio, setHourRatio] = useState(0)
  const [text, setText] = useState('Set Alarm')
  const [isActive, setIsActive] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [alarmTime, setAlarmTime] = useState('00:00')
  const isON = useRef('No')

  function checkClock() {
    let date = new Date()
    let hr = date.getHours();
    let min = date.getMinutes()
    let Sec = date.getSeconds();
    setSecRatio(Sec / 60)
    setMinRatio((min + (Sec / 60)) / 60)
    setHourRatio((hr + ((min + (Sec / 60)) / 60)) / 12)
  }

  useEffect(() => {
    setInterval(() => checkClock(), 1000);
  }, [])

  function Btn() {
    if (isActive === true) {
      setAlarmTime('')
      setText('Set Alarm')
      setDisabled(false)
      return setIsActive(false)
    }
    setAlarmTime(atime.value)
    setIsActive(true)
    setText('Clear Alarm')
    setDisabled(true)
    isON.current = 'No'
  }

  if (alarmTime === `${new Date().getHours()}:${new Date().getMinutes()}` ||
    alarmTime === `0${new Date().getHours()}:${new Date().getMinutes()}` ||
    alarmTime === `${new Date().getHours()}:0${new Date().getMinutes()}` ||
    alarmTime === `0${new Date().getHours()}:0${new Date().getMinutes()}`) {

    isON.current = 'Yes'
    console.log('Alarm Time');
    // if (audio !== undefined) {
    //   audio.play()
    //     .then(_ => {
    //       // autoplay started
    //     })
    //     .catch(err => {
    //       // console.info(err)
    //     })
    // }
  }

  else{
    isON.current = 'No'
  }

  return (
    <div>
      <h2>Analogue Alarm Clock</h2>
      <div className="contain">
        <div className="container">
          <div className="tx" id="a1"><div id="s1">1</div></div>
          <div className="tx" id="a2"><div id="s2">2</div></div>
          <div className="tx" id="a3"><div id="s3">3</div></div>
          <div className="tx" id="a4"><div id="s4">4</div></div>
          <div className="tx" id="a5"><div id="s5">5</div></div>
          <div className="tx" id="a6"><div id="s6">6</div></div>
          <div className="tx" id="a7"><div id="s7">7</div></div>
          <div className="tx" id="a8"><div id="s8">8</div></div>
          <div className="tx" id="a9"><div id="s9">9</div></div>
          <div className="tx" id="a10"><div id="s10">10</div></div>
          <div className="tx" id="a11"><div id="s11">11</div></div>
          <div className="tx" id="a12"><div id="s12">12</div></div>
        </div>
        <div id="hour" style={{ transform: `rotate(${hourRatio * 360}deg)` }}></div>
        <div id="minute" style={{ transform: `rotate(${minRatio * 360}deg)` }}></div>
        <div id="second" style={{ transform: `rotate(${secRatio * 360}deg)` }}></div>
        <div className="crc" id="date">{`${weekDay[dayVal]} ${dateVal}`}</div>
      </div>
      <div className="alarm">
        <label>Add Alarm time:</label>
        <input type="time" disabled={disabled} id="alarm-time" />
        <button className="btn" onClick={Btn}>{text}</button>
        <span className='status'>Alarm Ringing: {isON.current}</span>
        {/* <audio className='aud' src="alarm.wav"></audio> */}
      </div>
      <Link to='/timer' className='link'>Go to Analogue Timer</Link>
    </div>
  )
}

export default Clock