

function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".icon");

    if (answer.classList.contains("max-h-0")) {
      // Expand
      answer.classList.remove("max-h-0", "opacity-0");
      answer.classList.add("max-h-screen", "opacity-100");
      icon.textContent = "-";
    } else {
      // Collapse
      answer.classList.remove("max-h-screen", "opacity-100");
      answer.classList.add("max-h-0", "opacity-0");
      icon.textContent = "+";
    }
  }


