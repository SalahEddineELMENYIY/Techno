// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Selecting DOM elements
  const headerNavbar = document.querySelector(".navbar-area");
  const backToTopButton = document.querySelector(".scroll-top");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const pageLinks = document.querySelectorAll(".page-scroll");

  // Event listener for window scroll
  window.addEventListener("scroll", function () {
    // Get the offset for sticky behavior
    const sticky = headerNavbar.offsetTop;

    // Toggle sticky class based on scroll position
    headerNavbar.classList.toggle("sticky", window.pageYOffset > sticky);

    // Toggle back-to-top button visibility based on scroll position
    backToTopButton.style.display = window.pageYOffset > 50 ? "flex" : "none";
  });

  // Event listeners for smooth scrolling on page links
  pageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Scroll to the target element with smooth behavior
      const targetElement = document.querySelector(link.getAttribute("href"));
      targetElement.scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });

    // Close navbar-collapse when a page link is clicked
    link.addEventListener("click", function () {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    });
  });

  // Event listener for navbar-toggler click
  navbarToggler.addEventListener("click", function () {
    // Toggle the 'active' class on navbar-toggler
    navbarToggler.classList.toggle("active");
  });

  // Function for smooth scrolling
  function scrollTo(element, to = 0, duration = 1000) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  // Math function for easing
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // Event listener for scroll-top button click
  document.querySelector(".scroll-top").onclick = function () {
    // Scroll to the top of the document
    scrollTo(document.documentElement);
  };
});

// Another event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Selecting DOM elements
  let navbarToggler = document.querySelector(".navbar-toggler");
  let navbarCollapse = document.querySelector(".navbar-collapse");

  // Event listener for navbar-toggler click to toggle the display of navbar-collapse
  navbarToggler.addEventListener("click", function () {
    // Toggle the display property of navbarCollapse
    if (navbarCollapse.style.display === "block") {
      navbarCollapse.style.display = "none";
    } else {
      navbarCollapse.style.display = "block";
    }
  });
});
