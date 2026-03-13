/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".reveal")
  .forEach(el => observer.observe(el));


/* ================= DARK MODE ================= */

const toggleBtn = document.getElementById("darkToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
