//Calculator

let outputScreen = document.getElementById("screen");4

function appendToDisplay(num){
    outputScreen.value += num;
}

function cls(){
    outputScreen.value = "";
}



function deleteButton(){

    outputScreen.value = outputScreen.value.slice(0,-1);
}



function calculate(){
try{
    outputScreen.value = eval(outputScreen.value);

}catch(error){
    outputScreen.value = "Error";
    alert("Invalid Input");
}

}

function onOffButton(){}