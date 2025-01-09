document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.sidebar nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });

  // Toggle sidebar visibility on smaller screens
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
  });
});
