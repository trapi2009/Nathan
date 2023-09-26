// script.js

function adjustIframeSize() {
  const iframes = document.querySelectorAll("iframe");
  const windowHeight = window.innerHeight;

  iframes.forEach((iframe) => {
      iframe.style.height = `${windowHeight - 200}px`;
  });
}

window.addEventListener("resize", adjustIframeSize);
window.addEventListener("DOMContentLoaded", adjustIframeSize);
