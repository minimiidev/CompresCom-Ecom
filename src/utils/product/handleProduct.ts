export const handleProduct = () => {
  // Function to initialize or reinitialize the product selection
  const initProductSelection = () => {
    const btnWhats = document.getElementById("whatsappButton");
    const colors = document.querySelectorAll("[data-color]");
    const storages = document.querySelectorAll("[data-storage]");
    const name = document.getElementById("name")?.textContent ?? "";

    let selectedColor = "";
    let selectedStorage = "";

    // Handle single option cases (auto-select)
    if (colors.length === 1) {
      colors[0].classList.add("bg-sky-500", "text-white");
      selectedColor = colors[0].textContent ?? "";
    }

    if (storages.length === 1) {
      storages[0].classList.add("bg-sky-500", "text-white");
      selectedStorage = storages[0].textContent ?? "";
    }

    // Update WhatsApp message if we have defaults selected
    if (selectedColor || selectedStorage) {
      updateMessage();
    }

    // Add click event listeners for colors
    colors.forEach((color) => {
      color.addEventListener("click", () => {
        colors.forEach((item) =>
          item.classList.remove("bg-sky-500", "text-white")
        );
        color.classList.add("bg-sky-500", "text-white");
        selectedColor = color.textContent ?? "";
        updateMessage();
      });
    });

    // Add click event listeners for storage options
    storages.forEach((storage) => {
      storage.addEventListener("click", () => {
        storages.forEach((item) =>
          item.classList.remove("bg-sky-500", "text-white")
        );
        storage.classList.add("bg-sky-500", "text-white");
        selectedStorage = storage.textContent ?? "";
        updateMessage();
      });
    });

    // Update the WhatsApp message and link
    function updateMessage() {
      if (!btnWhats) return;

      const msg = `Me interesa ${name} de color ${selectedColor} con el almacenamiento de ${selectedStorage}`;
      const url = `https://wa.me/18293053240/?text=${encodeURIComponent(msg)}`;

      btnWhats.setAttribute("href", url);
    }
  };

  // Initialize on first load
  initProductSelection();

  // Handle Astro View Transitions
  document.addEventListener("astro:page-load", initProductSelection);

  // Clean up event listeners when navigating away (optional but good practice)
  document.addEventListener("astro:before-preparation", () => {
    const colors = document.querySelectorAll("[data-color]");
    const storages = document.querySelectorAll("[data-storage]");

    // Remove event listeners (if possible in your setup)
    // This is a simplified approach - a more robust solution would track and remove specific listeners
    colors.forEach((color) => {
      color.replaceWith(color.cloneNode(true));
    });

    storages.forEach((storage) => {
      storage.replaceWith(storage.cloneNode(true));
    });
  });
};
