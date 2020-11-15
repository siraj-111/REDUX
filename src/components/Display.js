import React from 'react'
import { useSelector } from 'react-redux';
function Display(){

const count=useSelector((state)=>{
    return state.counter
})


    return(
        <div>

    <h1>{count}</h1>
        </div>
    )
}
export default Display;