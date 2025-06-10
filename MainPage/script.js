// tsParticles setup
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 1000 } },
    color: { value: "#FFD93D" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 1,
      random: true,
      outModes: { default: "out" }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#888",
      opacity: 0.4,
      width: 0.8
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false, mode: "repulse" },
      onClick: { enable: false, mode: "push" }
    }
  },
  detectRetina: true
});

// GSAP animations
gsap.from(".logo", { duration: 1, y: -20, opacity: 0, ease: "back" });
gsap.from(".nav-links li", { duration: 1, x: 30, opacity: 0, stagger: 0.2 });
gsap.from(".post-box", { duration: 1, y: 30, opacity: 0, delay: 0.5 });
gsap.from(".post", { duration: 1, y: 40, opacity: 0, stagger: 0.2, delay: 0.6 });
gsap.from(".right-panel", { duration: 1.2, x: 50, opacity: 0, delay: 0.7 });

const response = await fetch('https://webdiary-backend-8.onrender.com/api/user', { ... });


// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
