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
    while (i < 81){
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
    let j = 0; 
    while(j<9){
        let a = i+3
        while (i < a){
            console.log(array[i])
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

function validateDiagonal(array){
    
    for(let i = 0; i<9; i++){
        if ( ((array [0 +(i*9)] == array[4+(i*9)]) && (array[4 +(i*9)] == array[8 +(i*9)]) && (array[0 +(i*9)] != '')) ||( (array [2 +(i*9)] == array[4 +(i*9)]) && (array[4 +(i*9)] == array[6 +(i*9)]) && (array[2 +(i*9)] != ''))) {
            return true;
        }
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
    console.log(event)
    const fieldId = event.target.id
    const field = document.getElementById(fieldId);
    if (field.innerHTML == ''){
        defValue()
        field.innerHTML = sessionStorage.getItem("value")
        validateGame()
    }
    
}

