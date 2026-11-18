const contactToggle = document.querySelector("#contact-toggle");
  const contactForm = document.querySelector("#contact-form");

  contactToggle.addEventListener("click", () => {
    const isExpanded = contactToggle.getAttribute("aria-expanded") === "true";
    contactToggle.setAttribute("aria-expanded", String(!isExpanded));
    contactForm.hidden = isExpanded;

    if (!isExpanded) {
      document.querySelector("#contact-name").focus();
    }
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = `Portfolio message from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message")
    ].join("\n");
    const mailto = `mailto:nanaoghenekevwe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });