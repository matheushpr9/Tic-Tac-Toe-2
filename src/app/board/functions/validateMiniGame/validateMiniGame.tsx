import horizontal from "./horizontal";
import vertical from "./vertical";
import diagonal from "./diagonal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import changeMiniGame from "../changeMiniGame";

export default function  validateMiniGame(event: React.MouseEvent){
    const fields = document.getElementsByClassName("field");
    const fieldsValue = [];
    

    for(let i = 0; i < fields.length; i++){
        fieldsValue.push(fields[i].innerHTML)
    }

    if( horizontal(fieldsValue) || vertical(fieldsValue) || diagonal(fieldsValue)){
        const notify = () => toast.success('🦄'+ sessionStorage.getItem("value") + ' Win!', {
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
    }
}