let btn = document.querySelector("button");
btn.onclick = function () {
  let h1 = document.querySelector("h1");
  //   h1.innerText = "صلي علي محمد";
  //   let h1Style = document.getAttribute("style");
  if (btn.innerText == "خد حسنه") {
    h1.innerText = "صلى على النبى";
    btn.innerText = "خد حسنه تاني";
  } else if (btn.innerText == "خد حسنه تاني") {
    h1.innerText = "اذكر الله";
    btn.innerText = "خد حسنه";
  }
};
