const activePage = window.location.pathname;
// console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  } else if (link.href.includes(`/`)) {
    link.classList.remove("active");
  }
});
