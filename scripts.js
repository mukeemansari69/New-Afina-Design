
/* #######################################################  count down #################################### */
 // ---------- Countdown Timer ----------
    let countdownElement = document.getElementById("countdown");
    let countdownTime = 5 * 60; // 5 minutes in seconds

    function updateCountdown() {
      let minutes = Math.floor(countdownTime / 60);
      let seconds = countdownTime % 60;
      countdownElement.textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

      if (countdownTime > 0) countdownTime--;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

/* #############################################################  Mobile toggel ##################################### */

const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const navClose = document.getElementById("nav-close");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  navClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

/* ############################################# its NOt You Seaction Video #########################    */
// 🎬 Video Hover Play/Pause + Controls + Button Toggle
document.querySelectorAll(".video-wrapper").forEach(wrapper => {
  const video = wrapper.querySelector("video");
  const button = wrapper.querySelector(".play-btn");

  let clicked = false; // track if user clicked play button

  // Hover in → play + controls + hide button
  wrapper.addEventListener("mouseenter", () => {
    video.setAttribute("controls", "true");
    video.play();
    if (!clicked) {
      button.style.display = "none";
    }
  });

  // Hover out → pause + remove controls + show button (only if not clicked)
  wrapper.addEventListener("mouseleave", () => {
    if (!clicked) {
      video.pause();
      video.removeAttribute("controls");
      button.style.display = "flex"; // show again if not clicked
    }
  });

  // Button click → play + unmute + controls stay + button hides forever
  button.addEventListener("click", () => {
    clicked = true;
    video.setAttribute("controls", "true");
    video.muted = false;
    video.play();
    button.style.display = "none"; // permanently hide
  });
});



/* #############################################################################  Why clorine seation ##################################### */

//----------------------> Accordion logic 

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const faqContainer = faqItem.parentElement;

    // Close other items
    faqContainer.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem) item.classList.remove("active");
    });

    // Toggle current
    faqItem.classList.toggle("active");
  });
});



/* #####################################################################   the seince seaction ####################################################### */

// Accordion Toggle
  document.querySelectorAll(".the-science-item").forEach(item => {
    item.querySelector(".the-science-question").addEventListener("click", () => {
      document.querySelectorAll(".the-science-item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });

  // Video Play/Pause
  const video = document.getElementById("scienceVideo");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.classList.add("hide");
    } else {
      video.pause();
      playBtn.classList.remove("hide");
    }
  });

  video.addEventListener("pause", () => playBtn.classList.remove("hide"));
  video.addEventListener("play", () => playBtn.classList.add("hide"));



 /* #####################################################################  loved section video ####################################### */
const carousel = document.querySelector(".loved-carousel");
const leftBtn = document.querySelector(".loved-arrow.left");
const rightBtn = document.querySelector(".loved-arrow.right");

let scrollAmount = 0;
const cardWidth = 325; // ek card + gap

function updateCarousel() {
  if (window.innerWidth >= 1024) {
    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
  } else {
    // touch mode -> reset transform
    carousel.style.transform = "translateX(0)";
    scrollAmount = 0;
  }
}

function moveRight() {
  const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
  if (scrollAmount + cardWidth <= maxScroll) {
    scrollAmount += cardWidth;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
}

function moveLeft() {
  if (scrollAmount - cardWidth >= 0) {
    scrollAmount -= cardWidth;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
}

window.addEventListener("resize", updateCarousel);
updateCarousel();

