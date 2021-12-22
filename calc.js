function display(value){
    document.getElementById("input").value += value;
}

function allclear(){
    document.getElementById("input").value = " ";
}

function solve(){
    let x = document.getElementById("input").value;
    document.getElementById("input").value = eval(x);
}

function changeInputColor(){
    document.getElementById("input").style.border = "2px solid #1976D2";
}