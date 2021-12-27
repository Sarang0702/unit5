import React from "react";

export const GrocyItem = ({title}) =>
{
    // console.log(title);

    const deleteButton = (e) => {
      
        

    } 

    return(
         <>
            <div>{title}</div>
            <button onClick={ () => deleteButton(title)}>Delete</button>
         </>
    )
}