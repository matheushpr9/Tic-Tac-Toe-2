export default function vertical(array: String[]){
    let i = 0;

    while(i < array.length){
       let j = i
        while(j < i+3){
            if(array[j]== array[j+3] && array[j+3] == array[j+6] && array[j] != ''){
                return true
                
            }
            j+=1
        }
        i+=9
    }
    return false
}