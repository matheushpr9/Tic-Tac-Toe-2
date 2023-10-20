import React from "react"
import defValue from "./defValue";
import validateMiniGame from "./validateMiniGame/validateMiniGame";
import setZoom from "./setZoom";
import cleanValuesCaches from "./cache/cleanValuesCache";
import cleanZoomCaches from "./cache/cleanZoomCaches";

export const setFieldValue = (event:React.MouseEvent)=>{

    const fields = Array.prototype.slice.call(document.getElementsByClassName("field"));
    console.log(fields)

    if(fields.every((value)=> value.innerHTML =='' || value.innerHTML == null)){
        cleanValuesCaches();
        cleanZoomCaches();
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