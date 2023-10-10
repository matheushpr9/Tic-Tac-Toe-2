export default function defValue(){
    const value = sessionStorage.getItem("value");

    if (value == null){
        sessionStorage.setItem("value","X");
    }

    else if(value =="O"){
        sessionStorage.setItem("value","X");
    }
    
    else{
        sessionStorage.setItem("value","O");
    }
}