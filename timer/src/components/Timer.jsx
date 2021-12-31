import { useEffect,useState } from "react"


export const Timer = () =>
{
    const [counter, setCounter] = useState(0)
    const [status, setStatus] = useState(true)
    
    useEffect( () => 
    {
        const id = setInterval( () =>
        {            
            if(counter > 0)
            {
                setCounter(counter+1);
            }
            else
            {
               clearInterval(id)
            }
            
            
        },1000)
    
    },[counter])

  
  
    

    const stop = () =>
    {
        setStatus(false)
        console.log("stop")
        setCounter(0);
    }
    
    const start = () =>
    {
        setCounter(1)
        console.log("start")
    }
    const reset = () =>
    {
        console.log("reset")
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