// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Save preference
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});


// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


// ================= PROJECT FILTER =================
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


// ================= BLOG FILTER =================
const blogBtns = document.querySelectorAll(".blog-btn");
const blogCards = document.querySelectorAll(".blog-card");

blogBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    blogBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-blog");

    blogCards.forEach(card => {
      if (filter === "all" || card.dataset.blogCategory === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


// ================= EXPERIENCE TABS =================
const expBtns = document.querySelectorAll(".exp-btn");
const expContents = document.querySelectorAll(".exp-content");

expBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    expBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.getAttribute("data-tab");

    expContents.forEach(content => {
      content.classList.remove("active");
      if (content.id === tab) {
        content.classList.add("active");
      }
    });
  });
});


// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message.textContent = "Message sent successfully!";
  form.reset();

  setTimeout(() => {
    message.textContent = "";
  }, 3000);
});