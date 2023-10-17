import { Session } from "inspector";
import React from "react";

export default function changeMiniGame(event: React.MouseEvent){
    const game = (event!.target as HTMLAnchorElement).parentElement!.parentElement!.parentElement!;
    console.log(game)
    game!.innerHTML ='<div class="game_done">'+sessionStorage.getItem("value") +"</div>"

}