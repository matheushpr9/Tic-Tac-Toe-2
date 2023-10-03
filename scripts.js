function defValue(){
    const value = sessionStorage.getItem("value")
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

function validateLines(array){
    let i = 0;
    console.log(array)
    while (i < 9){
        console.log(array[i])
        if ( (array [i] == array[i+1]) && (array[i+1] == array[i+2]) && (array[i] != '')){
            return true;
        }
        i+=3;
    }
    return false
}

function validateColumns(array){
    let i = 0;
    console.log(array)
    while (i < 3){
        console.log(array[i])
        if ( (array [i] == array[i+3]) && (array[i+3] == array[i+6]) && (array[i] != '')){
            return true;
        }
        i+=1;
    }
    return false
}

function validateDiagonal(array){

    if ( ((array [0] == array[4]) && (array[4] == array[8]) && (array[0] != '')) ||( (array [2] == array[4]) && (array[4] == array[6]) && (array[2] != ''))) {
        return true;
    }
    return false
}

function  validateGame(){
    const fields = document.getElementsByName("field");
    const fieldsValue = [];

    for(let i = 0; i < fields.length; i++){
        fieldsValue.push(fields[i].innerHTML)
    }

    if( validateLines(fieldsValue) || validateColumns(fieldsValue) ||validateDiagonal(fieldsValue)){
        alert(sessionStorage.getItem("value")+" win!");
        //location.reload()
    }
}

function setFieldValue(event){
    const fieldClassName = event.target.className
    const field = document.getElementsByClassName(fieldClassName)[0];
    if (field.innerHTML == ''){
        defValue()
        field.innerHTML = sessionStorage.getItem("value")
        validateGame()
    }
    
}

