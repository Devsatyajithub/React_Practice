import { useState} from 'react'
import './App.css';

function App() {

    let [counter, setCounter] = useState(15)

   //let counter =5

   const addValue = () => {
    //counter = counter + 1
    //console.log("clicked", counter);
    setCounter(counter =>counter  + 1)
   }
    const removeValue = () => {
      counter = counter - 1
      setCounter(counter)
    }

  
  return (
   <>
   <h1>COUNTER</h1>
   <h2>Counter Value:{counter}</h2>

   <button 
   onClick={addValue}>Add Value</button> <br></br>
   <button
   onClick={removeValue}>Remove Value</button>
   </>
  );
}

export default App;
