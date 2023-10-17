import React from "react"
import defValue from "./defValue";
import validateMiniGame from "./validateMiniGame/validateMiniGame";
import setZoom from "./setZoom";

export const setFieldValue = (event:React.MouseEvent)=>{

    
    const fieldId = (event!.target as HTMLAnchorElement).id;
    const gameId = (event!.target as HTMLAnchorElement).parentElement?.parentElement?.parentElement!.id;
    
    const field = document.getElementById(fieldId);

    if ( (field!.innerHTML ==''&&  "game"+sessionStorage.getItem("Zoom") == gameId )||(sessionStorage.getItem("Zoom") == null)){
        defValue();
        field!.innerHTML = sessionStorage.getItem("value")!;
        
        validateMiniGame(event);
        setZoom(event);
    }
    
}   