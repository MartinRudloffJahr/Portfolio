function addIconsToContainer(containerId, numberOfIcons) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < numberOfIcons; i++) {
      const icon = document.createElement("img");

      // Using a placeholder image service for demonstration
      icon.src = `https://placekitten.com/50/50?image=${i}`; // Placeholder image URL

      icon.classList.add("icon");
      container.appendChild(icon);
  }
}

// Example: Add 10 icons to the bio section
addIconsToContainer("bio-icons", 30);
addIconsToContainer("experience-icons", 30);

// You can call this function for other sections with different amounts of icons
