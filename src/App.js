

import Display from './components/display';
import Buttons from './components/buttons';
import './App.css';
import { useState } from 'react';

function App() {
  const[value,setValue] = useState("")

  const handleClick=(e)=>{
    
     if(e.target.value==="C")
    {
      
      setValue("")
      console.log("c")
    }
    else if(e.target.value==="+/-")
    {
      console.log("+-")
      console.log(value)
      setValue(-1*value)
    }
    else if(e.target.value==="=")
    {
      try{
        console.log(value)
        let regex_num = value.replace(/^0+/,"");
        setValue(eval(regex_num).toString());
        console.log(value)

      }
      catch(error){
        setValue('Error')
        console.log(value+"+")
      }
     

    }
    else{
      console.log("value")
      setValue(value + e.target.value)
    }
  }

  return (
    <div className="App">
      <Display value= {value} />
            <div className='keys'>
               
                <Buttons value="C" name= "C" onClick={handleClick} />
                <Buttons value="+/-" name= "+/-" onClick={handleClick}/>
                <Buttons value="%" name= "%" onClick={handleClick}/>
                <Buttons value="/" name = "/" onClick={handleClick}/>
            </div>
            <div>
                <Buttons value="7" name= "7" onClick={handleClick}/>
                <Buttons value="8" name= "8" onClick={handleClick}/>
                <Buttons value="9" name= "9" onClick={handleClick}/>
                <Buttons value="*" name = "*" onClick={handleClick}/>
            </div>
            <div>
                <Buttons value="4" name= "4" onClick={handleClick}/>
                <Buttons value="5" name= "5" onClick={handleClick}/>
                <Buttons value="6" name= "6" onClick={handleClick}/>
                <Buttons value="-" name = "-" onClick={handleClick}/>
            </div>
            <div>
                <Buttons value="1" name= "1" onClick={handleClick}/>
                <Buttons value="2" name= "2" onClick={handleClick}/>
                <Buttons value="3" name= "3" onClick={handleClick}/>
                <Buttons value="+" name = "+" onClick={handleClick}/>
            </div>
            <div  >
                <Buttons  value="0" name= "0" onClick={handleClick} />
                <Buttons value="." name= "." onClick={handleClick}/>
                <Buttons className="eval" value="=" name = "=" onClick={handleClick}/>
            </div>
      
    </div>
  );
}

export default App;
