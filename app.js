document.getElementById("btn").addEventListener("click", function () {
  this.style.backgroundColor = fun();

  setInterval(() => {
    document.getElementById("bg").style.backgroundColor = fun();
  }, 2000);
});

function funNumber() {
  return Math.random() * 255;
}

function fun() {
  var r = funNumber();
  var g = funNumber();
  var b = funNumber();
  return `rgb(${r} ,${g} ,${b})`;
}
