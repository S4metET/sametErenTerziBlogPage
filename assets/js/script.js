function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  setTimeout(() => {
      sidebar.style.opacity = '1';
      sidebar.style.transform = 'translateX(0)';
  }, 10);
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.opacity = '0';
  sidebar.style.transform = 'translateX(100%)';

  setTimeout(() => {
      sidebar.style.display = 'none';
  }, 500);
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
