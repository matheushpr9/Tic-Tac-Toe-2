export default function defValue(){
    const value = localStorage['value'];
    console.log(value)

    if (value == null){
        localStorage['value'] = "X";
    }

    else if(value =="X"){
        localStorage['value'] = "O";
    }
    
    else{
        localStorage['value'] = "X";
    }
}