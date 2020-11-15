import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'





function Counter(){
    
     const [ value , setvalue]=useState(0);
     const dispatch=useDispatch();
    const count=useSelector((state)=>{
         return state.counter
     })


     return(


        <div>

     <h4>{count}</h4>
   <button onClick={()=>{ dispatch({type:"INCREMENT"}); }} >increment</button>
   <button onClick={()=>{ dispatch({type:"DECREMENT"});}} >Decrement</button>


    <br/>
    <input type="text" onChange={(e)=>{setvalue(e.target.value)} } id="input"/>
    <br/>
    <button onClick={()=>{dispatch({type:"INCREMENT_BY_AMOUNT",payload:Number(value)});document.getElementById('input').value=''; }}>set value</button> 
       </div>
     )




}
export default Counter;