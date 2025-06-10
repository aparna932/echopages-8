// Load particles background
const particlesConfig = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "char",
      character: {
        value: ["🔒"],
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
      color: "#00ff00",
      opacity: 0.5,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 1,
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

// Load particles
tsParticles.load("tsparticles", particlesConfig);

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {
      const response = await fetch('https://webdiary-backend-8.onrender.com/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username, password }), // use email if your backend expects it
  credentials: 'include' // only if backend sets cookies
});


      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        window.location.href = '/dashboard.html'; // Redirect to your dashboard page
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  });
});

async function performSearch() {
  const query = document.getElementById('search-input').value.trim();

  if (query !== '') {
    try {
      const response = await fetch(`https://webdiary-backend-8.onrender.com/api/search?q=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add Authorization if using JWT
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const results = await response.json();

      // ✅ Do something with results (e.g., display in DOM)
      console.log('Search Results:', results);
      alert(`Found ${results.length} results for "${query}"`);

      // Example: show in a div with id="results"
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = results.map(r => `<p>${r.title || r.username}</p>`).join('');

    } catch (error) {
      console.error('Error during search:', error);
      alert('Error fetching search results.');
    }
  }
}
