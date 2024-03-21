console.log("hi");

function onSubmit(event) {
  event.preventDefault();
}

function changevalue(a) {
  const inputElement = document.getElementById("input");
  const inputValue = parseFloat(inputElement.value);

  const fromData = document.getElementById("input").value;
  if (!inputElement.checkValidity()) {
    alert("Please enter a valid number.");
    return;
  }
  resultvalue = fromData * a;
  document.getElementById("result").innerHTML = resultvalue;
  // console.log(resultvalue);
}
// changevalue(1);
