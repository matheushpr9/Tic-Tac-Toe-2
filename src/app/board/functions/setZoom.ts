import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function setZoom(event:React.MouseEvent){
    const game = (event!.target as HTMLAnchorElement).id;
    const boardNumber = game.length == 6 ? game.slice(-1) : parseInt(game.slice(-2)) %  9;
    
    if(localStorage["Zoom"]){
        const board = document.getElementById("game"+localStorage["Zoom"]);
        board!.className = "game"
    }

    localStorage["Zoom"] = boardNumber.toString()
    const board = document.getElementById("game"+boardNumber)
    
    if((board!.childNodes[0]! as HTMLElement).className != "game_done" || board == null){
        board!.className = "game zoom"
    }else{

        const notify = () => toast.info('The chosen field has already been finalized,'+ ' choose the field you want to play!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            notify()
    }
    
}