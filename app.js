// Scroll reveal (progressive enhancement; reduced-motion users already see everything).
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  // Waitlist form. NOTE: Formspree form id is not wired yet (action contains REPLACE_WITH_FORM_ID).
  // Until it's set, intercept the submit so the page demos cleanly instead of POSTing nowhere.
  var form = document.getElementById("waitlist");
  if (form) {
    form.addEventListener("submit", function (ev) {
      var notWired = form.getAttribute("action").indexOf("REPLACE_WITH_FORM_ID") !== -1;
      if (notWired) {
        ev.preventDefault();
        var ok = document.getElementById("formSuccess");
        if (ok) ok.style.display = "block";
        form.querySelector('input[type="email"]').value = "";
      }
      // Once the real Formspree id is in place, this guard is skipped and the form POSTs normally.
    });
  }
})();
