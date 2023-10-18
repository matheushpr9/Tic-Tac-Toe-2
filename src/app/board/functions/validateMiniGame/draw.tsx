import isFiled from "./isFiled";

export default function draw(array : String[]){

    for(let i = 0; i < array.length; i+9){
        if(isFiled(array.slice(i,i+9))){
            return true
        }
    }
}