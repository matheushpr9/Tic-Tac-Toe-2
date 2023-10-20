export default function isFiled(array : String[]){

    const validate = (field: String) => field === "X" || field ==="O"

    if(array.every(validate)){
        return true
    }
    return false
}