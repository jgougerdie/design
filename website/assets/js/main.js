// Video Design Studio — shared site behavior: nav toggle, scroll reveal,
// hero keyframe-field parallax, running timecode readout, contact form.

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Hero keyframe-field parallax
  const field = document.querySelector(".keyframe-field");
  const stage = field ? field.querySelector(".stage") : null;
  if (field && stage && !reduceMotion) {
    field.addEventListener("mousemove", (e) => {
      const rect = field.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
    });
    field.addEventListener("mouseleave", () => {
      stage.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  }

  // Running timecode readout — a studio's own vernacular as ambient motion.
  const tc = document.querySelector("[data-timecode]");
  if (tc && !reduceMotion) {
    const start = performance.now();
    const pad = (n) => String(n).padStart(2, "0");
    const tick = (now) => {
      const elapsedFrames = Math.floor(((now - start) / 1000) * 24);
      const frames = elapsedFrames % 24;
      const totalSeconds = Math.floor(elapsedFrames / 24);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600);
      tc.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Contact form — client-side only; wire to a real inbox before launch.
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Received. We reply to serious enquiries within one business day.";
        status.classList.add("visible");
      }
      form.reset();
    });
  }
});
