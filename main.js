
var data=""

///Function to get only numbers
function numbers(id){
    const value=document.getElementById(id).textContent;
    const display=document.getElementsByTagName('h3')[0];
    data+= value;  
    display.innerText=data;
    

}