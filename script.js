const iconData = {
  // Your icon data here (as previously described)
  // Example:
  "icon1": {
    title: "Title for Icon 1",
    description: "Description for Icon 1",
    images: [
        'images/button1.png',
        'images/button1.png',
        'images/button1.png',
    ]
},
    "icon2": {
    title: "Title for Icon 2",
    description: "Description for Icon 2",
    images: [
        'images/button2.png',
        'images/button2.png',
        'images/button2.png',
    ]
},

  "icon3": {
    title: "Title for Icon 3",
    description: "Description for Icon 3",
    images: [
        'images/button3.png',
        'images/button3.png',
        'images/button3.png',
    ]
  },
  "icon4": {
    title: "Title for Icon 4",
    description: "Description for Icon 4",
    images: [
        'images/button4.png',
        'images/button4.png',
        'images/button4.png',

    ]
  },
  "icon5": {
    title: "Title for Icon 5",
    description: "Description for Icon 5",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },








};


const n64Colors = ['#e60012', '#13a10e', '#0037da', '#fcd116']; // N64 palette colors

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', changeLinkColor);
        link.addEventListener('focus', changeLinkColor);
        link.addEventListener('mouseleave', revertLinkColor);
        link.addEventListener('blur', revertLinkColor);
    });
});

function changeLinkColor() {
    const randomColor = n64Colors[Math.floor(Math.random() * n64Colors.length)];
    this.style.color = randomColor;
}

function revertLinkColor() {
    this.style.color = '#FFFFFF'; // Reverting to white
}




document.addEventListener("DOMContentLoaded", function() {
  // Function to open the slider with content based on the clicked icon
  function openSlider(iconId) {
      const data = iconData[iconId];
      if (data) {
          document.getElementById('slider-title').innerText = data.title;
          document.getElementById('slider-description').innerText = data.description;

          for (let i = 1; i <= 4; i++) {
              document.getElementById('img' + i).src = data.images[i - 1];
          }

          document.getElementById('slider').style.right = "0";
      } else {
          console.error("Icon data not found for id: " + iconId);
      }
  }

  // Attaching click event listeners to each icon
  document.querySelectorAll('.icon').forEach(icon => {
      icon.addEventListener('click', function(event) {
          openSlider(this.id);
          event.stopPropagation();
      });
  });

  // Close button functionality
  document.getElementById("close-slider").addEventListener("click", function() {
      document.getElementById("slider").style.right = "-100%";
  });

  // Close slider when clicking outside of it (on the window)
  window.addEventListener("click", function() {
      document.getElementById("slider").style.right = "-100%";
  });

  // Prevent the slider from closing when clicking inside it
  document.getElementById("slider").addEventListener("click", function(event) {
      event.stopPropagation();
  });
});
