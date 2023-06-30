import React, { useEffect, useState } from 'react';
import RadioBtnGroup from '../components/RadioBtnGroup';
import CheckList from '../components/CheckList';
import ToggleBtn from '../components/ToggleBtn';
import Toast from '../components/Toast';

const Sub = () => {
  const inputStyle = { 
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    justifyContent: 'center'
  }

  const [checked, setChecked] = useState()
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  const [minValue, setMinValue] = useState(0)
  const [condition, setCondition] = useState(false)

  useEffect(() => {
    if(active && count < minValue) {
      setCondition(false)
    } else {
      setCondition(true)
    }

  }, [count, minValue, active])

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>현재 페이지는 Sub Page입니다.</h3>
      <CheckList style={inputStyle} setCount={setCount} setChecked={setChecked}/>
      <RadioBtnGroup style={inputStyle} setMinValue={setMinValue}/>
      <ToggleBtn setActive={setActive} />
      <Toast isValid={condition} task={checked}/>
    </div>
  );
};

export default Sub;