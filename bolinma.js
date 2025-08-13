document.getElementById("sumBtnBolinma").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
    } else {
      document.getElementById("result").textContent = "Yig‘indi: " + (a / b);
    }
  });