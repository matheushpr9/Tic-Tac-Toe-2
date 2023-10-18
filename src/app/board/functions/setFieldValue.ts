import React from "react"
import defValue from "./defValue";
import validateMiniGame from "./validateMiniGame/validateMiniGame";
import setZoom from "./setZoom";

export const setFieldValue = (event:React.MouseEvent)=>{

    const fields = Array.prototype.slice.call(document.getElementsByClassName("field"));
    console.log(fields)

    if(fields.every((value)=> value.innerHTML =='' || value.innerHTML == null)){
        localStorage.removeItem("value");
        localStorage.removeItem("Zoom");
    }
    
    const fieldId = (event!.target as HTMLAnchorElement).id;
    const gameId = (event!.target as HTMLAnchorElement).parentElement?.parentElement?.parentElement!.id;
    
    const field = document.getElementById(fieldId);

    console.log(localStorage["Zoom"])

    if ( (field!.innerHTML ==''&&  "game"+localStorage["Zoom"] == gameId )||(localStorage["Zoom"] == null)){
        defValue();
        
        field!.innerHTML = localStorage["value"]!;
        
        validateMiniGame(event);
        setZoom(event);
    }
    
}   