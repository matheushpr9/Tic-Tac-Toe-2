import Game from "../miniGame/Game";

interface LineBoardAttributes{
    init:number
}

export default function LineBoard({init}:LineBoardAttributes){
    
    const games = []

    for(let i = init*3; i<(init*3)+3; i++){    
        games.push(<Game key={i} init={i}/>)
    }

    return(
        <div className="mother-line">
            {games}
        </div>
    )
}