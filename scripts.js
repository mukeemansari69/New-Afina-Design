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
