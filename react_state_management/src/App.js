import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() 
{
    const [count, setCount] = useState(0)

    const changeCount= (value) =>
    {
     
      setCount((prev) => {
        return prev+value;
      });

    };

    const doubleCount= () =>
    {
     
      setCount((prev) => {
        return prev*2;
      });

    };

  return (
    <div>
      <h3>Counter : {count}</h3>
      {count<10 && <button onClick={() => changeCount(1)}>Add 1</button>}
      {count>0 && <button onClick={() => changeCount(-1)}>Sub 1</button>}
      <button onClick={doubleCount}>Double</button>
      
    </div>
   );
}

export default App;
