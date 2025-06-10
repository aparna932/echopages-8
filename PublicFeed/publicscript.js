// Load particles
tsParticles.load("tsparticles", {
  fpsLimit: 120,
  particles: {
    number: { value: 120, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: {
      type: "char",
      character: {
        value: ["📢"],
        font: "Verdana",
        style: "",
        weight: "bold"
      }
    },
    opacity: { value: 1 },
    size: {
      value: 10,
      random: { enable: true, minimumValue: 6 }
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
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true,
  background: {
    color: "#000000",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
});

// Fetch public posts
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://webdiary-backend-8.onrender.com/api/posts');
    const posts = await response.json();

    const container = document.getElementById('public-posts');
    if (Array.isArray(posts)) {
      container.innerHTML = posts.map(post =>
        `<div class="post">
           <h4>${post.userId?.username || 'Anonymous'}</h4>
           <p>${post.content}</p>
           <small>${new Date(post.date).toLocaleString()}</small>
         </div>`
      ).join('');
    } else {
      container.innerHTML = '<p>No posts found.</p>';
    }
  } catch (error) {
    console.error('Error fetching public posts:', error);
  }
});
