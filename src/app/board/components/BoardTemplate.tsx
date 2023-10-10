import Line from "./game/Line";

export default function BoardTemplate(){
    
    const lines = []
    for(let i = 0; i<3 ; i++){
        lines.push(<Line key={i} init={i}/>);
    }   

    return (
         <div>
            {lines}
         </div>
            
    )
}