function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
              });
          }
      });
  });
});
