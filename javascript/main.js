// GSAP
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.out" },
});

tl.fromTo(
  ".hero-img",
  { scale: 1.04, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    duration: 2.5,
    ease: "elastic.out(1.5, 1",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");

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
    document.querySelector(".hero-img").style.filter = "hue-rotate(90deg)";
  } else {
    gsap.fromTo(
      "body",
      { background: "linear-gradient(35deg, #121314, #111111, #121314)" },
      { background: "#f8fafc" }
    );
    document.querySelector(".hero-img").style.filter = "hue-rotate(0deg)";
  }
});
