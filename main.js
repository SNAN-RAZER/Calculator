var keys_included=[96,110,97,98,99,100,101,102,55,104,105,111,106,109,103,107];


function valueButton(e){
    calculatorForm.screen.value += e.value;
}
function Clear(){
    calculatorForm.screen.value = null;
}
function Calculate(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if  (keys_included.includes(key.keyCode) ) {
        

    }
    else{
        console.log(key.key)
        alert("The " +key.key+" letter key has been pressed.");
    }

}
