function display(value) {
  document.getElementById("result").value += value;
}

function allclear() {
  document.getElementById("result").value = " ";
}

function solve() {
  let x = document.getElementById("result").value;
  document.getElementById("result").value = eval(x);
}

function changeInputColor() {
  document.getElementById("result").style.border = "2px solid #1976D2";
}
