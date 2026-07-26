document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("typed-text");

  if (!el) return;

  // Ensure the container has a fixed height and overflow enabled for scrolling
  // If you haven't set this in CSS, this JS will add a temporary style
  if (!el.style.maxHeight) {
    el.style.maxHeight = "300px"; 
    el.style.overflowY = "auto";
    //el.style.border = "1px solid #ccc"; // Optional: visual border
    el.style.padding = "10px";
  }

  const texts = [
    "Turning Healthcare Data into Actionable Intelligence\n",
    "M&E & Impact Assessment for Global Health Programs\n",
    "Building Real-Time R Shiny & Power BI Dashboards\n",
    "Automating Donor Reports & Operational Insights\n"
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

    // Update text content
    el.textContent = current.substring(0, j);

    // SCROLL LOGIC: Scroll to the bottom after every update
    // We use a small timeout to ensure the browser has rendered the new text height
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);

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

  // Initial setup to clear and start
  el.innerHTML = ""; 
  type();
});