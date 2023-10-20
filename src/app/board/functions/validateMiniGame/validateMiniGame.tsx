import horizontal from "./horizontal";
import vertical from "./vertical";
import diagonal from "./diagonal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import changeMiniGame from "../changeMiniGame";
import isFiled from "./isFiled";

export default function  validateMiniGame(event: React.MouseEvent){
    const fields = document.getElementsByClassName("field");
    const fieldsValue = [];
    
    for(let i = 0; i < fields.length; i++){
        fieldsValue.push(fields[i].innerHTML)
    }

    const gameNumber = (event.target as HTMLElement).parentElement?.parentElement?.parentElement?.id;
    console.log((event.target as HTMLElement))

    const boardNumber =  parseInt(gameNumber!.slice(-1));

    const game = fieldsValue.slice(boardNumber*9,(boardNumber*9)+9)
    console.log("aqu");
    console.log(boardNumber)
    console.log(game);  
    if( horizontal(fieldsValue) || vertical(fieldsValue) || diagonal(fieldsValue)){
        const notify = () => toast.success('🦄'+ localStorage["value"] + ' Win!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        notify();
        
        changeMiniGame(event);

        //location.reload()
    }else if(isFiled(game) && game.length == 9){
        console.log("aqu")
        console.log(game)
        const notify = () => toast.info('🦄'+ "It's a draw!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        notify();
        
        changeMiniGame(event,"Ø");
    }
}