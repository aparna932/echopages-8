function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query.trim() !== '') {
        alert(`Searching for: ${query}`);
        // Logic for performing the actual search (e.g., filtering results or querying a backend) goes here.
    }
}
const particlesConfig = {
    fpsLimit: 120,
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "char", // Using emoji character
        character: {
          value: ["🔍 "], // Lock emoji
          font: "Verdana",
          style: "",
          weight: "bold"
        }
      },
      opacity: {
        value: 1,
        random: false
      },
      size: {
        value: 10,
        random: {
          enable: true,
          minimumValue: 6
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ADD8E6", // Green link lines
        opacity: 0.8,
        width: 1.5
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true,
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };
  
  tsParticles.load("tsparticles", particlesConfig);