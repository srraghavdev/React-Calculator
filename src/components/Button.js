import React from 'react'

let Button=  (props) =>{
    
return (
    <button onClick={()=>{props.onclick(props.name)}} className='btn'>{props.name}</button>    
)
}
export default Button