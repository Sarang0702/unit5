import React, { useState } from "react";
import { GrocyInput } from "./GrocyInput";
import { GrocyItem } from "./GrocyItem";


export const Grocy = () =>
{
    const [list,setList] = useState([])

    const handleClick = (data) =>
    {
        setList([...list,data]);
    }

    return(<> 
        <GrocyInput getData={handleClick}/>
        {
            list.map((e , i) => (
                <GrocyItem key={i} title={e} />
            ))
        }
    </>);
}