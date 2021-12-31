import { useEffect,useState } from "react"


export const Timer = () =>
{
    const [counter, setCounter] = useState(0)
    const [status, setStatus] = useState(true)
    
    useEffect( () => 
    {
        const id = setInterval( () =>
        {            
            
            setCounter((p) => p+1 );
            
            
        },1000)
    
    },[])

  
  
    

    const stop = () =>
    {
        setStatus(false)
        console.log("stop");
        
    }
    
    const start = () =>
    {
        setCounter(1)
        console.log("start")
    }
    const reset = () =>
    {
        //setCounter(1);
        console.log("reset")
        setCounter(0);
    }

    console.log(status)
   


    return (
        <>
            <h3>Count is : {counter} </h3>
            <br />
            <button onClick={start}>Start</button>
            {"  "}
            <button onClick={stop}>Stop</button>
            {"  "}
            <button onClick={reset}>Reset</button>
            
        </>
    )
}