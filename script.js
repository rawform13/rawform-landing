const form = document.getElementById("signupForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Enviando…";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    });

    if (res.ok) {
      form.reset();
      statusEl.textContent = "You're all set. We’ll be in touch.";
    } else {
      statusEl.textContent = "No se pudo enviar. Prueba otra vez en unos segundos.";
    }
  } catch (err) {
    statusEl.textContent = "Error de conexión. Revisa tu red y prueba otra vez.";
  }
});
