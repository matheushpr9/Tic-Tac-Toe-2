export default function vertical(array: String[]){
    let i = 0;
    let j = 0;

    while(j<9){
        let a = i+3
        while (i < a){
    
            if ( (array [i] == array[i+3]) && (array[i+3] == array[i+6]) && (array[i] != '')){
                return true;
            }
            i+=1;
        }
        i += 6;
        j++;
    }
    return false
}