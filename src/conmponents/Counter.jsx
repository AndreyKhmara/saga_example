import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { asyncDecrementCreator, asyncIncrementCreator } from '../redux/reducers/counterRdducer'

export default function Counter() {
   const counter = useSelector((state)=>state.countReducer.counter)
   const dispatch = useDispatch()
    console.log(counter)




  return (
    <div>
        <div>{counter}</div>
        <button onClick={()=>dispatch(asyncIncrementCreator())}>increment</button>
        <button onClick={()=>dispatch(asyncDecrementCreator())}>decrement</button>  

              
    </div>
  )
}
