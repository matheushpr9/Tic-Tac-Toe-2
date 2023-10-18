import React from "react";

export default function changeMiniGame(event: React.MouseEvent, character: string | null = null ){
    const game = (event!.target as HTMLAnchorElement).parentElement!.parentElement!.parentElement!;
    console.log(game)
    
    const value = character??localStorage["value"]

    game!.innerHTML ='<div class="game_done">'+ value +"</div>"

}