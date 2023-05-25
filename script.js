const keys = Array.from(document.querySelectorAll(".key"));

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  playSound(keyCode);
}

function removePlayingClass(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", handleKeyDown);
keys.forEach((key) => {
  key.addEventListener("transitionend", removePlayingClass);
});
