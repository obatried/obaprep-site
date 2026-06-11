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

  // Waitlist form → Cloudflare Worker (obaprep-waitlist) → beehiiv "ObaPrep" list.
  var form = document.getElementById("waitlist");
  if (form) {
    var ENDPOINT = "https://obaprep-waitlist.ajayioba2.workers.dev";
    var btn = document.getElementById("waitlistSubmit");
    var ok = document.getElementById("formSuccess");
    var err = document.getElementById("formError");
    var emailInput = form.querySelector('input[type="email"]');
    var hpInput = form.querySelector('input[name="company"]');

    function fail(label) {
      if (err) err.style.display = "block";
      if (btn) { btn.disabled = false; btn.textContent = label; }
    }

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (err) err.style.display = "none";

      var email = ((emailInput && emailInput.value) || "").trim();
      if (!email) return;

      var label = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Joining…"; }

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, company: (hpInput && hpInput.value) || "" })
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            return r.ok && d && d.ok;
          });
        })
        .then(function (success) {
          if (!success) return fail(label);
          if (ok) ok.style.display = "block";
          var field = form.querySelector(".field");
          var note = form.querySelector(".field-note");
          if (field) field.style.display = "none";
          if (note) note.style.display = "none";
        })
        .catch(function () { fail(label); });
    });
  }
})();
