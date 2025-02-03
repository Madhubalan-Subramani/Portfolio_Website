//-- Navbar and sidebar link to get active code start
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-link");

  // Function to add 'active-link' to both navbar and sidebar
  function activateLink(clickedLink) {
    const targetId = clickedLink.getAttribute("href");

    // Remove active class from all links in both navbar and sidebar
    navLinks.forEach((nav) => nav.classList.remove("active-link"));
    sidebarLinks.forEach((sidebar) => sidebar.classList.remove("active-link"));

    // Add active class to the corresponding link in both navbar and sidebar
    navLinks.forEach((nav) => {
      if (nav.getAttribute("href") === targetId) {
        nav.classList.add("active-link");
      }
    });

    sidebarLinks.forEach((sidebar) => {
      if (sidebar.getAttribute("href") === targetId) {
        sidebar.classList.add("active-link");
      }
    });

    // Smooth scrolling effect
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Add event listener to navbar links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      activateLink(this); // Activate the link and scroll to target
    });
  });

  // Add event listener to sidebar links
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      activateLink(this); // Activate the link and scroll to target
    });
  });
});
//-- Navbar link to get active code end

//--   Button Animation Code start
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // Get the position of the click inside the button
      const rect = this.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Create a new ripple element
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      // Set the position of the ripple
      ripple.style.left = `${x - 50}px`;
      ripple.style.top = `${y - 50}px`;
      ripple.style.width = ripple.style.height = `${Math.max(
        rect.width,
        rect.height
      )}px`;

      // Append the ripple to the button
      this.appendChild(ripple);

      // Remove the ripple after animation ends
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    });
  });
});
//--   Button Animation Code end

// Get references to the elements
const menuBtn = document.querySelector(".nav-menu-btn");
const sidebar = document.querySelector(".sidebar");

// Toggle the 'open' class on the sidebar when the menu button is clicked
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// -- Side bar open and close code Start
const navLinks = document.querySelectorAll(".nav-link");
const sidebarLinks = document.querySelectorAll(".sidebar .nav-link");
const toggleIcon = document.getElementById("toggle-icon");

if (toggleIcon) {
  toggleIcon.classList.add("fa-bars"); 
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});
// -- Side bar open and close code end

// ---Animation for home page
document.addEventListener("DOMContentLoaded", () => {
  function addAnimationOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animation);
      } else {
        entry.target.classList.remove(entry.target.dataset.animation);
      }
    });
  }

  const observer = new IntersectionObserver(addAnimationOnScroll, {
    threshold: 0.5,
  });

  const featuredTextElements = document.querySelectorAll(
    ".featured-text .hello, .featured-text .name, .featured-text .text-info, .featured-text .text-btn, .featured-text .social_icons"
  );

  featuredTextElements.forEach((el, index) => {
    if (el.classList.contains("hello")) {
      el.dataset.animation = "animate__fadeInUp";
    } else if (el.classList.contains("name")) {
      el.dataset.animation = "animate__fadeInLeft";
    } else if (el.classList.contains("text-info")) {
      el.dataset.animation = "animate__fadeIn";
    } else if (el.classList.contains("text-btn")) {
      el.dataset.animation = "animate__fadeIn";
    } else if (el.classList.contains("social_icons")) {
      el.dataset.animation = "animate__fadeInUp";
    }

    observer.observe(el);
  });
});

// -- Animation about page
document.addEventListener("DOMContentLoaded", () => {
  let aboutText = document.querySelector(".about-text");
  let aboutTextName = document.querySelector(".about-text-name");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    return rect.top <= windowHeight * 0.75 && rect.bottom >= 0;
  }

  if (isInViewport(aboutText)) {
    aboutText.classList.add("show-animate");
  }

  if (isInViewport(aboutTextName)) {
    aboutTextName.classList.add("show-animate");
  }

  window.addEventListener("scroll", () => {
    if (isInViewport(aboutTextName)) {
      aboutTextName.classList.add("show-animate");
    } else {
      aboutTextName.classList.remove("show-animate");
    }
  });

  window.addEventListener("scroll", () => {
    if (isInViewport(aboutText)) {
      aboutText.classList.add("show-animate");
    } else {
      aboutText.classList.remove("show-animate");
    }
  });
});

//---- Skill page animation
document.addEventListener("DOMContentLoaded", () => {
  let skillCards = document.querySelectorAll(".skill-card");
  let skillHeader = document.querySelector(".skills-header");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    return rect.top <= windowHeight * 0.85 && rect.bottom >= 0;
  }

  if (isInViewport(skillHeader)) {
    skillHeader.classList.add("show-animate");
  }

  window.addEventListener("scroll", () => {
    if (isInViewport(skillHeader)) {
      skillHeader.classList.add("show-animate");
    } else {
      skillHeader.classList.remove("show-animate");
    }
  });

  function handleScroll() {
    skillCards.forEach((card, index) => {
      if (isInViewport(card)) {
        setTimeout(() => {
          card.classList.add("show-animate");
        }, index * 150); // Staggered delay for cascading effect
      } else {
        card.classList.remove("show-animate");
      }
    });
  }

  // Initial check on page load
  handleScroll();

  // Scroll event listener
  window.addEventListener("scroll", handleScroll);
});

// skill percentage
document.querySelectorAll(".progress-circle").forEach((circle) => {
  let value = circle.getAttribute("data-progress");
  let progressCircle = circle.querySelector(".progress");
  let dashoffset = 283 - (283 * value) / 100;
  progressCircle.style.strokeDashoffset = dashoffset;
});

// -----education Animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".exp-edu-container");
  let expEduTopic = document.querySelector(".edu-exp-topic");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    return rect.top <= windowHeight * 0.75 && rect.bottom >= 0;
  }

  if (isInViewport(expEduTopic)) {
    expEduTopic.classList.add("show-animate");
  }

  window.addEventListener("scroll", () => {
    if (isInViewport(expEduTopic)) {
      expEduTopic.classList.add("show-animate");
    } else {
      expEduTopic.classList.remove("show-animate");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});


// ---Project page
document.addEventListener("DOMContentLoaded", function () {
  let projectTopic = document.querySelector(".project-topic");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    return rect.top <= windowHeight * 0.75 && rect.bottom >= 0;
  }

  if (isInViewport(projectTopic)) {
    projectTopic.classList.add("show-animate");
  }

  window.addEventListener("scroll", () => {
    if (isInViewport(projectTopic)) {
      projectTopic.classList.add("show-animate");
    } else {
      projectTopic.classList.remove("show-animate");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let projectContainers = document.querySelectorAll(".project-container");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
  }

  function checkScroll() {
    projectContainers.forEach((container) => {
      if (isInViewport(container)) {
        container.classList.add("show-animate");
      } else {
        container.classList.remove("show-animate"); // Remove to replay animation
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run once on page load
});

// ----contact page
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("responseMessage").textContent =
      "Your message has been sent successfully!";
    this.reset();
  });

  document.addEventListener("DOMContentLoaded", function () {
    let contactSection = document.querySelector(".contact-container");
  
    function isInViewport(element) {
      let rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
    }
  
    function checkScroll() {
      if (isInViewport(contactSection)) {
        contactSection.classList.add("show-animate");
      } else {
        contactSection.classList.remove("show-animate"); // Replay animation on re-entering
      }
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check on page load
  });
  
  


