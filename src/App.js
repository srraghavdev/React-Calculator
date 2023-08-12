import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import {useState} from 'react' 
function App() {
  let [obj,Setobject]= useState({n1:'',n2:''}) //object for n1 and n2
  let [errorm,Seterrorm]= useState('') // errorm useState variabke ,error message
  let [succm,Setsuccm]= useState('') // succm , succcess message
  let [error,Seterror]=useState('') // error value
  function changename(event){
    let val=event.target.value
    console.log(event)
    if(event.target.id==1) {
      Setobject({...obj,n1:val}) //setting value of n1
    }
    else{
      Setobject({...obj,n2:val}) //setting value of n2
    }
    Seterrorm('') //setting errom
    Setsuccm('') //setting succm
    Seterror('') //setting error
  }
  function validate(operator){
    let number1= Number(obj.n1)
    let number2 = Number(obj.n2)
    if(obj.n1.trim()==''){ //checking for empty numbers
      document.getElementsByClassName('error')[0].style.color='red'//setting color
      Seterror('Error')// setting error and error message
      Seterrorm('Number 1 cannot be empty')
    }
    else if(obj.n2.trim()==''){
      Seterror('Error') //checking for empty numbers
      Seterrorm('Number 2 cannot be empty')// setting error and error message
      document.getElementsByClassName('error')[0].style.color='red'//setting color
     
    }
    else if(isNaN(number1)){
      Seterror('Error') //checking if converted number is NaN
      Seterrorm('Number 1 is not a number')// setting error and error message
      document.getElementsByClassName('error')[0].style.color='red' //setting color
      
    }
    else if(isNaN(number2)){
      Seterror('Error') //checking if converted number is NaN
      Seterrorm('Number 2 is not a number') // setting error and error message
      document.getElementsByClassName('error')[0].style.color='red' //setting color
      
    }
    else{ 
      Seterror('Success')
      Seterrorm('') // setting error and error message
      document.getElementsByClassName('error')[0].style.color='green' //setting color
      getresult(operator) //calling getresult
    }
  }
  function getresult(operator){
    if(operator==''){
      Setsuccm('') //setting successs message if operator is empty
    }
    let number1= Number(obj.n1)
    let number2 = Number(obj.n2)
    if(operator=='+'){
      Setsuccm(`Result is ${number1+number2}`) //setting successs message
    }
    else if(operator=='-'){
      Setsuccm(`Result is ${number1-number2}`) //setting successs message
    }
    else if(operator=='*'){
      Setsuccm(`Result is ${number1*number2}`)//setting successs message
    }
    else{
      if(number2==0){
        Setsuccm(`Infinity`) //handling case when n2 is 0 and division is called ,resulting in Infiity
      }
      else{
         Setsuccm(`Result is ${number1/number2}`) //setting successs message
      }
    }
  }
  /*calling button componenet with validate fn as props*/
  /*calling input componenet with chnagename fn passed as prop */
  return (
    <div className='container'>
      <p>React Calculator</p>
      <div className='inputcont'>
        <Input number='1' fn={changename}/> 
        <Input number='2' fn={changename}/>
      </div>
      <div className='btncont'>
        <Button name='+' onclick={validate}/> 
        <Button name='-' onclick={validate}/> 
        <Button name='*' onclick={validate}/>
        <Button name='/' onclick={validate}/>
      </div>
      <div className='rescont'>
        <div className='message'>
        <div className='error'>{error
         }</div>
        <div className='errormessage'>{error=='Error'? errorm : ''}</div>
        </div>
        <div className='result'>{error=='Success'? succm: ''}</div>
        </div>
    </div>
  )
}

export default App;
