document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("typed-text");

  if (!el) return;

  const texts = [
    "Data Analyst",
    "Monitoring & Evaluation Specialist",
    "R Developer",
    "Power BI Dashboard Builder"
  ];

  let i = 0;
  let j = 0;
  let isDeleting = false;

  const typingSpeed = 90;
  const deletingSpeed = 50;
  const pauseTime = 1200;

  function type() {
    const current = texts[i];

    if (isDeleting) {
      j--;
    } else {
      j++;
    }

    el.textContent = current.substring(0, j);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Pause when word is fully typed
    if (!isDeleting && j === current.length) {
      delay = pauseTime;
      isDeleting = true;
    }

    // Move to next word
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, delay);
  }

  type();
});


el.style.opacity = 0;

setTimeout(() => {
  el.textContent = current.substring(0, j);
  el.style.opacity = 1;
}, 40);