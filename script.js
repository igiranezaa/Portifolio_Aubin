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


// ================= PROJECT MODALS =================
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-overlay").classList.remove("active");
    document.body.style.overflow = "";
  });
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach(overlay => {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
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