const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach((node) => observer.observe(node));

const cards = document.querySelectorAll(".project-card, .section-card, .timeline-card");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    card.style.transform = `translateY(-4px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const currentY = window.scrollY;
    header.style.boxShadow =
      currentY > 20 ? "0 16px 34px rgba(86, 114, 138, 0.12)" : "0 10px 30px rgba(86, 114, 138, 0.08)";
    lastScrollY = currentY;
  },
  { passive: true }
);

const resumeTrigger = document.querySelector("[data-resume-trigger]");
const resumeModal = document.querySelector("[data-resume-modal]");
const resumeClose = document.querySelector("[data-resume-close]");

function openResumeModal() {
  resumeModal.hidden = false;
  resumeClose.focus();
}

function closeResumeModal() {
  resumeModal.hidden = true;
  resumeTrigger.focus();
}

resumeTrigger?.addEventListener("click", openResumeModal);
resumeClose?.addEventListener("click", closeResumeModal);

resumeModal?.addEventListener("click", (event) => {
  if (event.target === resumeModal) {
    closeResumeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (!resumeModal?.hidden && event.key === "Escape") {
    closeResumeModal();
  }
});
