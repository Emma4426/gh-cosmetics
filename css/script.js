// Smoothly scroll to a page section when its link points to an existing element.
const sectionLinks = document.querySelectorAll('a[href^="#"]');

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    // Leave the link alone if there is no matching section.
    if (!targetSection) {
      return;
    }

    event.preventDefault();

    if (window.location.hash !== `#${targetId}`) {
      window.history.pushState(null, "", `#${targetId}`);
    }

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
