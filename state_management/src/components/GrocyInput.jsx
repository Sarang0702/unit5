import {React,useState} from "react";

export const GrocyInput = ({getData}) =>
{
    const [text,setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    } 

    const handleClick = () => {
        
        getData(text);
    }


    return(<> 

        <input type="text" placeholder="Enter Grocery" onChange={handleChange} />
        <button onClick={handleClick}>Add Grocery</button>

    </>);
}