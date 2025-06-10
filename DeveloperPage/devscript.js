tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 1000 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "char",
        character: {
          value: ["💻"],
          font: "Verdana",
          style: "",
          weight: "bold"
        }
      },
      opacity: { value: 1 },
      size: {
        value: 14,
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00ffcc",
        opacity: 0.6,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        random: true,
        outModes: { default: "out" }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false }
      }
    },
    detectRetina: true
  });
  function openPortfolio(url) {
    window.open(url, '_blank');
  }
  