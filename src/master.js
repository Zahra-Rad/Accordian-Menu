const _li = document.querySelectorAll("main>ul>li>div");
const spans = document.querySelectorAll("span");

_li.forEach((element, i) => {
  let _ul = element.nextElementSibling;
  const smallLis = _ul.querySelectorAll("li");

  _ul.setAttribute("data-height", _ul.clientHeight);
  _ul.style.height = "0px";

  element.addEventListener("click", () => {
    _li.forEach((item, index) => {
      if (i != index) {
        item.nextElementSibling.style.height = "0px";
        item.setAttribute("data-status", "off");
        item.nextElementSibling.querySelectorAll("li").forEach((element) => {
          element.style.transform = "translateX(-100%)";
        });
      }
    });
    setTimeout(() => {
      if (element.getAttribute("data-status") == "off") {
        _ul.style.height = _ul.getAttribute("data-height") + "px";
        element.setAttribute("data-status", "on");
        spans[i].style.rotate = "90deg";
        // for (let i = 0; i < smallLis.length; i++) {
        smallLis.forEach((val, i) => {
          setTimeout(() => {
            val.style.transform = "translateX(0%)";
          }, i * 300);
        });
      } else {
        spans[i].style.rotate = "0deg";
        _ul.style.height = "0px";
        element.setAttribute("data-status", "off");
        smallLis.forEach((element) => {
          element.style.transform = "translateX(-100%)";
        });
      }
    }, 100);
  });
});
