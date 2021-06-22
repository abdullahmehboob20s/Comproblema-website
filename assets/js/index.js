let faq_accordion = document.querySelectorAll(".faq_accordion");
let header_right_toggler = document.querySelector(".header_right_toggler");
let header_right = document.querySelector(".header_right");
let close_header_right = document.querySelector(".close_header_right");
let header_right_black_screen = document.querySelector(
  ".header_right_black_screen"
);
let faq_accordion_body_up = document.querySelectorAll(".faq_accordion_body");

for (let i = 0; i < faq_accordion.length; i++) {
  faq_accordion[i].addEventListener("click", (e) => {
    let faq_accordion_body = faq_accordion[i].querySelector(
      ".faq_accordion_body"
    );

    faq_accordion.forEach((item2) => {
      if (item2 !== faq_accordion[i]) {
        let faq_accordion_body_nested = item2.querySelector(
          ".faq_accordion_body"
        );
        faq_accordion_body_nested.style.height = "";
        item2.classList.remove("active");
      }
    });

    if (faq_accordion[i].classList.contains("active")) {
      faq_accordion[i].classList.remove("active");
      faq_accordion_body.style.height = "0px";
      return;
    }

    faq_accordion[i].classList.add("active");
    faq_accordion_body.style.height = faq_accordion_body.scrollHeight + "px";
  });
}

header_right_toggler.addEventListener("click", () => {
  header_right.classList.add("show");
  header_right_black_screen.classList.add("show");
});

close_header_right.addEventListener("click", () => {
  header_right.classList.remove("show");
  header_right_black_screen.classList.remove("show");
});
header_right_black_screen.addEventListener("click", () => {
  header_right.classList.remove("show");
  header_right_black_screen.classList.remove("show");
});
