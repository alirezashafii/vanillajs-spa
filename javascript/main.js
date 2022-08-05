import Home from "./home.js";
import About from "./about.js";
import Image from "./image.js";

// 1. what view should be shown to user based on route.
function router(params) {
  const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/images", view: Image },
  ];
  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoutes.find((route) => route.isMatch);
  if (!match) {
    match = {
      route: { path: "/not-found", view: () => console.log("not found") },
      isMatch: true,
    };
  }
  document.querySelector(".root").innerHTML = match.route.view();
  // console.log(match.route.view());
  const child = document.querySelector(".root").children[0].classList;
  // console.log(child);
  if (child == "hero-section") {
    // GSAP - HOME section
    const tl = gsap.timeline({
      defaults: { duration: 0.75, ease: "power3.out" },
    });

    tl.fromTo(
      ".hero-img",
      { scale: 0.9, borderRadius: "0rem" },
      {
        scale: 1,
        borderRadius: "2rem",
        duration: 2.5,
        ease: "elastic.out(1.5, 1",
      }
    );

    tl.fromTo(
      ".cta1",
      { x: "100%", opacity: 0.5 },
      { x: 0, opacity: 1 },
      "<20%"
    );
    tl.fromTo(
      ".cta3",
      { x: "-100%", opacity: 0.5 },
      { x: 0, opacity: 1 },
      "<20%"
    );
    tl.fromTo(
      ".cta2",
      { y: "-100%", opacity: 0.5 },
      { y: 0, opacity: 1 },
      "<20%"
    );
    tl.fromTo(
      ".cta4",
      { x: "100%", opacity: 0.5 },
      { x: 0, opacity: 1 },
      "<20%"
    );
    tl.fromTo(
      ".cta6",
      { x: "-100%", opacity: 0.5 },
      { x: 0, opacity: 1 },
      "<20%"
    );
    tl.fromTo(
      ".cta5",
      { y: "100%", opacity: 0.5 },
      { y: 0, opacity: 1 },
      "<20%"
    );
    // Dark mode
    logo.addEventListener("click", () => {
      if (document.body.classList.contains("dark")) {
        document.querySelector(".hero-img").style.filter = "hue-rotate(90deg)";
      } else {
        document.querySelector(".hero-img").style.filter = "hue-rotate(0deg)";
      }
    });
    // Horizontal Scrolling Section
    const scroll = document.querySelector(".scroll");
    let isDown = false;
    let scrollX;
    let scrollLeft;
    // Mouse Up Function
    scroll.addEventListener("mouseup", () => {
      isDown = false;
      scroll.classList.remove("active");
    });
    // Mouse Leave Function
    scroll.addEventListener("mouseleave", () => {
      isDown = false;
      scroll.classList.remove("active");
    });
    // Mouse Down Function
    scroll.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDown = true;
      scroll.classList.add("active");
      scrollX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    });
    // Mouse Move Function
    scroll.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      let element = e.pageX - scroll.offsetLeft;
      let scrolling = (element - scrollX) * 2;
      scroll.scrollLeft = scrollLeft - scrolling;
    });
  } else if (child == "image-section") {
    // GSAP - IMAGE section
    const imageTl = gsap.timeline({
      defaults: { duration: 0.75, ease: "elastic.out(1, 0.4)" },
    });
    imageTl.fromTo(
      ".image-section",
      { scale: 0.9, y: 50 },
      { scale: 1, y: 0, duration: 2 }
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});

// 2. push user to new url
document.body.addEventListener("click", (evt) => {
  if (evt.target.hasAttribute("data-link")) {
    evt.preventDefault();
    navigateTo(evt.target.href);
  }
});

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

// GSAP - NAV section
const logo = document.querySelector("h1");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: 100 },
  { y: 0, delay: 0.5, stagger: 0.05, ease: Elastic.easeOut.config(0.5, 1.5) }
);

gsap.fromTo(
  "nav ul",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, ease: Sine.easeOut, duration: 0.5 }
);

// Dark mode
logo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    gsap.fromTo(
      "body",
      { background: "#f8fafc" },
      { background: "linear-gradient(35deg, #121314, #111111, #121314)" }
    );
    // document.querySelector(".hero-img").style.filter = "hue-rotate(90deg)";
  } else {
    gsap.fromTo(
      "body",
      { background: "linear-gradient(35deg, #121314, #111111, #121314)" },
      { background: "#f8fafc" }
    );
    // document.querySelector(".hero-img").style.filter = "hue-rotate(0deg)";
  }
});
