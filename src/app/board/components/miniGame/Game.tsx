import { Line } from "./Line"

interface GameAttributes {
    init: number
}

export default function Game({init} :GameAttributes){
    const lines = []

    for(let i=init*9; i<(init*9)+9; i+=3){
        lines.push(<Line initial={i}/>)
    }

    return(
        <div className="game" id={"game"+init}>
            {lines}
        </div>
    )
}