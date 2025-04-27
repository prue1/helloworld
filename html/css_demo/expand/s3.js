function enter() {
  document.querySelector(".div1").classList.add("div1-move")
  document.querySelector(".div2").classList.add("div2-move")
  document.querySelector(".div3").classList.add("div3-move")
}

function leave() {
  document.querySelector(".div1").classList.remove("div1-move")
  document.querySelector(".div2").classList.remove("div2-move")
  document.querySelector(".div3").classList.remove("div3-move")
}