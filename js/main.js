/* =============================================================
   Prime Care Senior Services — site behavior
   Plain JavaScript, no libraries. Runs after the page loads.
   ============================================================= */
(function () {
  "use strict";

  /* ---- 1. Mobile navigation toggle ------------------------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close the menu after tapping a link (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- 2. Header shadow once you scroll -------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- 3. Scroll-reveal animations ------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- 4. Current year in footer --------------------------- */
  document.querySelectorAll("#year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- 5. Consultation form (Web3Forms) -------------------- */
  var form = document.getElementById("consultForm");
  var statusBox = document.getElementById("formStatus");

  if (form && statusBox) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var key = form.querySelector('input[name="access_key"]').value;

      // Friendly reminder if the access key hasn't been set up yet.
      if (!key || key === "YOUR_WEB3FORMS_ACCESS_KEY") {
        showStatus(
          "err",
          "The contact form isn't connected yet. Please call us at (216) 777-0435 or email 3vedam@gmail.com — we'd love to help."
        );
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending…";
      hideStatus();

      var data = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            form.reset();
            showStatus(
              "ok",
              "Thank you — your request has been sent. We'll be in touch very soon. For anything urgent, call (216) 777-0435."
            );
          } else {
            showStatus(
              "err",
              "Sorry, something went wrong. Please call (216) 777-0435 or email 3vedam@gmail.com and we'll help right away."
            );
          }
        })
        .catch(function () {
          showStatus(
            "err",
            "We couldn't send your message just now. Please call (216) 777-0435 or email 3vedam@gmail.com."
          );
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = originalText;
        });
    });
  }

  function showStatus(type, msg) {
    if (!statusBox) return;
    statusBox.className = "form-status show " + type;
    statusBox.textContent = msg;
    statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function hideStatus() {
    if (!statusBox) return;
    statusBox.className = "form-status";
    statusBox.textContent = "";
  }
})();
