export default function diagonal(array: String[]){
    console.log(array)
    for (let i=0; i < 9; i++){
        if ( ((array [0+(i*9)] == array[4+(i*9)]) && (array[4+(i*9)] == array[8+(i*9)]) && (array[0+(i*9)] != '')) ||( (array [2+(i*9)] == array[4+(i*9)]) && (array[4+(i*9)] == array[6+(i*9)]) && (array[2+(i*9)] != ''))) {
            return true;
        }
    }
    
    return false
    
}