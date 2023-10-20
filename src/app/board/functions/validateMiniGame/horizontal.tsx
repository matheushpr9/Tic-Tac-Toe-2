export default function horizontal(array:String[]){
    let i = 0;
    while (i < array.length){
        if ( (array [i] == array[i+1]) && (array[i+1] == array[i+2]) && (array[i] != '')){
            console.log("horizontal")
            return true;
        }
        i+=3;
    }
    return false
}