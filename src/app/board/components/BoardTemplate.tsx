import Line from "./game/Line";
import { ToastContainer } from "react-toastify";

export default function BoardTemplate(){
    
    const lines = []
    for(let i = 0; i<3 ; i++){
        lines.push(<Line key={i} init={i}/>);
    }   

    return (
         <div>
            <ToastContainer />
            {lines}
         </div>
            
    )
}