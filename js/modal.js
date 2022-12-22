document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");

  document.getElementById("linkModal").addEventListener(
    "click",
    function () {
      modal.classList.remove("offmodal");
      modal.classList.add("onmodal");
    },
    false
  );

  document.querySelector(".close").addEventListener(
    "click",
    function () {
      modal.classList.remove("onmodal");
      modal.classList.add("offmodal");
    },
    false
  );
});

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
