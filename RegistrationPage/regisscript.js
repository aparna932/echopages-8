// Particle Background Setup
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
      type: "char",
      character: {
        value: ["📋"],
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
      color: "#d1ff33",
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

// Login Form Submission Handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {
      const response = await fetch('https://webdiary-backend-8.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }), // Or use { email: username, password } if your backend expects email
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        window.location.href = '/dashboard.html'; // redirect on success
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Something went wrong. Please try again.');
    }
  });
});