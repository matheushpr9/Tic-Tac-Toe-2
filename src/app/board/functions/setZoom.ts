import { Console } from "console";

export default function setZoom(event:React.MouseEvent){
    const game = (event!.target as HTMLAnchorElement).id;
    const boardNumber = game.length == 6 ? game.slice(-1) : parseInt(game.slice(-2)) %  9;
    console.log(boardNumber
        )
    
    if(sessionStorage.getItem("Zoom")){
        const board = document.getElementById("game"+sessionStorage.getItem("Zoom"));
        board!.className = "game"
    }

    sessionStorage.setItem("Zoom",boardNumber.toString( ))
    const board = document.getElementById("game"+boardNumber)
    board!.className = "game zoom"

}