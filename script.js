// var textForm = document.getElementsByClassName("textview")

function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}

function clearForm() {
  document.form1.textview.value = "";
}

// function changeSign() {

// }

function equal() {
  var expression = document.form1.textview.value;

  if (expression) {
    document.form1.textview.value = eval(expression);
  }
}
