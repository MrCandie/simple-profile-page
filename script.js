const but = document.querySelector(".but");
const one = document.querySelector(".one");
const btns = document.querySelectorAll(".butns");
const bot = document.querySelector(".bot");
// const background = document.querySelector(".background");

for (i = 0; i < btns.length; i++) console.log(btns[i]);

but.addEventListener("click", function () {
  one.classList.remove("hidden");
  btns[i].classList.remove("hidden");
});

bot.addEventListener("click", function () {
  one.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Shift") {
    one.classList.add("hidden");
  }
});
