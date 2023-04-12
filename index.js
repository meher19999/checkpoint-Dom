var btnplus = document.querySelectorAll(".plus");
var qte = document.getElementsByClassName("qte");
var btnminus = document.querySelectorAll(".minus");



for (let i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener("click", function () {
      return qte[i].innerHTML++;
    });
  }
  
  for (let i = 0; i < btnminus.length; i++) {
    btnminus[i].addEventListener("click", function () {
      if (qte[i].innerHTML > 0) {
        return qte[i].innerHTML--;
      } else {
        return (qte[i].innerHTML = 0);
      }
    });
  }
  var trash = document.querySelectorAll(".delete");

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.parentElement.remove();
  });
}