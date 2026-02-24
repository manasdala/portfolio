// ============================================
//  HAMBURGER MENU TOGGLE
// ============================================
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon  = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ============================================
//  SCROLL-REVEAL  (Intersection Observer)
// ============================================
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // fire only once
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// ============================================
//  NAVBAR SCROLL SHADOW
// ============================================
const desktopNav = document.getElementById("desktop-nav");
const hamNav     = document.getElementById("hamburger-nav");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  if (desktopNav) {
    desktopNav.style.boxShadow = scrolled
      ? "0 4px 30px rgba(132,94,194,0.15)"
      : "0 2px 20px rgba(132,94,194,0.07)";
  }
  if (hamNav) {
    hamNav.style.boxShadow = scrolled
      ? "0 4px 30px rgba(132,94,194,0.15)"
      : "none";
  }
});

// ============================================
//  TYPED ROLE EFFECT (optional flair)
// ============================================
const roles = ["Data Science Undergraduate", "Python Developer", "ML Enthusiast", "Problem Solver"];
const typedEl = document.querySelector(".typed-role");

if (typedEl) {
  let ri = 0, ci = 0, deleting = false;
  const type = () => {
    const current = roles[ri];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(type, 1600);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 45 : 80);
  };
  setTimeout(type, 800);
}
