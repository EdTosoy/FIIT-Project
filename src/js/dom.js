const loader = document.querySelector(".loader");
setTimeout(() => {
  loader.style.display = "none";
}, 3000);

//left Navigation
const leftNavs = document.querySelectorAll(".navigation > li");
leftNavs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") return;
    leftNavs.forEach((nav) => nav.classList.remove("selected"));
    e.target.parentElement.classList.add("selected");
  });
});
