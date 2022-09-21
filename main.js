/* (function () {
  let div = document.querySelector("div");

  div.addEventListener("click", () => {
    console.log("hello");
  });
})();

let button = document.querySelector("button");

button.onclick = () => {
  console.log("good");
};

button.innerText = "hello";
 */
function revealMyInfo(myInfo, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;
}
