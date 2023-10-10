export default function horizontal(array:String[]){
    let i = 0;
    while (i < 81){
        if ( (array [i] == array[i+1]) && (array[i+1] == array[i+2]) && (array[i] != '')){
            return true;
        }
        i+=3;
    }
    return false
}