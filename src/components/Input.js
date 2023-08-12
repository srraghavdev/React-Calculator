import React from 'react'


let Input=  (props) =>{
     let id=props.number
return (
     <div className='input'>
        <input type='text' onInput={props.fn} id={id} placeholder={`Number ${id}`}></input>
     </div>
)

}
export default Input