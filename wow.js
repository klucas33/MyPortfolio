const u = document.querySelector("div");

u.getAttribute("class");
u.setAttribute("class", "you");
u.removeAttribute("class");

u.style.color = "red";
u.classList.add("hello");

function good(e) {
  e.preventDefault();
  e.stopPropagation();
}

const example = null ?? "i";

function getPrint() {
  return function () {
    console.log("1");
  };
}

getPrint()();
