const appHeight = () => document.body.style.setProperty('--app-height', `${window.innerHeight}px`);
window.addEventListener("resize", appHeight);
appHeight();

if (window.innerWidth > 550)
  document.getElementById("divider").src = "images/pattern-divider-desktop.svg";
else
  document.getElementById("divider").src = "images/pattern-divider-mobile.svg";

$(window).resize(function() {
  if (window.innerWidth > 550)
    document.getElementById("divider").src = "images/pattern-divider-desktop.svg";
  else
    document.getElementById("divider").src = "images/pattern-divider-mobile.svg";
});

function getAdvice () {
  fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
  }).then(adviceData => {
    const adviceObj = adviceData.slip;
    document.getElementById("advice-number").innerText = "ADVICE #" + adviceObj.id;
    document.getElementById("advice-quote").innerText = "\"" + adviceObj.advice + "\"";
  })
}

function flip() {
    document.getElementById("dice").style.animation = "flip 1s ease 1";
    setTimeout(resetFlip, 1000);
  }
  
function resetFlip() {
  document.getElementById("dice").style.animation = "none";
}