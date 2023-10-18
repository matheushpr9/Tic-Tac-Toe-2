export default function isFiled(array : String[]){

    const isFiled = (field: String) => field === "X" || field ==="O"

    if(array.every(isFiled)){
        return true
    }
    return false
}