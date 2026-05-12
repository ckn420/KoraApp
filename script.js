/* =====================================================
   KORA — Script principal
   - Reveal al scroll usando IntersectionObserver
   - Sombra dinámica en el nav al hacer scroll
   - Smooth scroll mejorado para enlaces internos
   - CTA "Solicitar demo" simulado
   ===================================================== */

(() => {
  "use strict";

  /* ---------- 1. Reveal al hacer scroll ---------- */
  const revealTargets = document.querySelectorAll(
    ".modulo, .nofun__card, .interfaz, .flujo__step, .futuro__item, .publico article, .reqs__list li, .section__head"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Pequeño stagger para grids
          setTimeout(() => entry.target.classList.add("in"), i * 40);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  revealTargets.forEach((el) => io.observe(el));

  /* ---------- 2. Nav con scroll ---------- */
  const nav = document.querySelector(".nav");
  let lastScroll = 0;

  const onScroll = () => {
    const y = window.scrollY;
    if (y > 30) {
      nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
      nav.style.boxShadow = "none";
    }
    lastScroll = y;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 3. Smooth scroll para anclas ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#" || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ---------- 4. CTA "Solicitar demo" ---------- */
  const ctaBtn = document.querySelector(".nav__cta");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      window.location.href = "mailto:contacto@kora.app?subject=Solicitud%20de%20demo%20-%20KORA";
    });
  }

  /* ---------- 5. Tilt sutil en el mockup del teléfono ---------- */
  const phone = document.querySelector(".phone");
  const heroPhone = document.querySelector(".hero__phone");

  if (phone && heroPhone && window.matchMedia("(min-width: 980px)").matches) {
    heroPhone.addEventListener("mousemove", (e) => {
      const rect = heroPhone.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = x * 12;
      const rotX = -y * 8;
      phone.style.transform = `rotate(-3deg) perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    });
    heroPhone.addEventListener("mouseleave", () => {
      phone.style.transform = "";
    });
  }
})();
