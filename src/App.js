
import { useState } from 'react';
import './App.css';

function App() {
  const[value , setvalue] = useState("");

  function equals(){
    try {
      setvalue(eval(value).toString());
    } catch (error) {
      setvalue("Error");
    }
  }
  return (
    <div className="App">
      
      <div className="inputbox">
        <input type="text" value={value} />
      </div>
      <div className="buttons">
        <div className='button1'>
      <input type="button" value="AC" className='main' onClick={e=> setvalue('')}/>
      <input type="button" value="DE" className='main' onClick={e=> setvalue(value.slice(0,-1))} />
      <input type="button" value="." className='main' onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="/" className='main' onClick={e => setvalue(value+e.target.value)}/>
      </div>
        <div className='button2'>
      <input type="button" value="7"onClick={e => setvalue(value+e.target.value)} />
      <input type="button" value="8" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="9" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="*" className='main' onClick={e => setvalue(value+e.target.value)} />
      </div>
        <div className='button2'>
      <input type="button" value="4" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="5" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="6" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="+" className='main' onClick={e => setvalue(value+e.target.value)}/>
      </div>
        <div className='button2'>
      <input type="button" value="1" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="2" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="3" onClick={e => setvalue(value+e.target.value)}/>
      <input type="button" value="-" className='main' onClick={e => setvalue(value+e.target.value)}/>
      </div>
        <div className='button2'>
      <input type="button" value="00"onClick={e => setvalue(value+e.target.value)} />
      <input type="button" value="0" onClick={e => setvalue(value+e.target.value)}/>
      {/* <input type="button" value="^" className='main' onClick={e => setvalue(value+e.target.value)}/> */}
      <input type="button" value="=" className='main equal'  onClick={equals}/>
      
      </div>
      </div>
          </div>
  );
}

export default App;
