const iconData = {
  // Your icon data here (as previously described)
  // Example:
  "icon1": {
    title: "About me",
    description: "*lovely description about me, work in progress",
    images: [
        'images/content/me1.png',
        'images/content/me2.png',
        'images/content/me3.png',
    ]
},
    "icon2": {
    title: "Moving to Berlin",
    description: "short story of how i ended up here and what ive done",
    images: [
        'images/button2.png',
        'images/button2.png',
        'images/button2.png',
    ]
},

  "icon3": {
    title: "Looking for",
    description: "short story for what im looking forward at this moment in life",

    images: [
        'images/button3.png',
        'images/button3.png',
        'images/button3.png',
    ]
  },
  "icon4": {
    title: "",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

    images: [
        'images/button4.png',
        'images/button4.png',
        'images/button4.png',

    ]
  },
  "icon5": {
    title: "Title for Icon 5",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon6": {
    title: "Title for Icon 6",
    description: "Description for Icon 6",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon7": {
    title: "Title for Icon 7",
    description: "Description for Icon 7",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon8": {
    title: "Title for Icon 8",
    description: "Description for Icon 8",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon9": {
    title: "Title for Icon 9",
    description: "Description for Icon 9",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon10": {
    title: "Title for Icon 10",
    description: "Description for Icon 10",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon11": {
    title: "Title for Icon 11",
    description: "Description for Icon 11",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon12": {
    title: "Title for Icon 12",
    description: "Description for Icon 12",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon13": {
    title: "Title for Icon 13",
    description: "Description for Icon 13",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon14": {
    title: "Title for Icon 14",
    description: "Description for Icon 14",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon15": {
    title: "Title for Icon 15",
    description: "Description for Icon 15",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },  "icon16": {
    title: "Title for Icon 16",
    description: "Description for Icon 16",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },  "icon17": {
    title: "Title for Icon 17",
    description: "Description for Icon 17",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },  "icon18": {
    title: "Title for Icon 18",
    description: "Description for Icon 18",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },  "icon19": {
    title: "Title for Icon 19",
    description: "Description for Icon 19",
    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },  "icon20": {
    title: "Title for Icon 20",
    description: "Description for Icon 20",
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
  const icons = document.querySelectorAll('.icon');
  const slider = document.getElementById("slider");
  const imageOverlay = document.getElementById("image-overlay");

  // Navigation link hover and focus events
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => link.style.color = '#FFFFFF');
    link.addEventListener('focus', () => link.style.color = '#FFFFFF');
    link.addEventListener('mouseleave', () => link.style.color = '');
    link.addEventListener('blur', () => link.style.color = '');
    link.addEventListener('click', scrollToSection); // Scroll to section functionality
  });

  // Icon click functionality
  icons.forEach(icon => {
    icon.addEventListener('click', function(event) {
      icons.forEach(ic => ic.classList.remove('active-icon', 'clicked-icon')); // Remove both classes from all icons
      this.classList.add('active-icon', 'clicked-icon'); // Add both classes to the clicked icon
      openSlider(this.id);
      event.stopPropagation();
    });
  });

  // Slider close functionality
  document.getElementById("close-slider").addEventListener("click", closeSlider);

  // Overlay functionality
  const gridImages = document.querySelectorAll('.image-grid img');
  gridImages.forEach(img => {
    img.addEventListener('click', function() {
      openOverlay(this.src);
    });
  });

  imageOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
      closeOverlay();
      openSliderFromOverlay();
    }
  });

  // Prevent closing slider on click inside
  slider.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  // Prevent closing overlay on click inside
  document.getElementById("overlay-image").addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Functions
  function openSlider(iconId) {
    const data = iconData[iconId];
    if (data) {
      document.getElementById('slider-title').innerText = data.title;
      document.getElementById('slider-description').innerText = data.description;

      for (let i = 1; i <= 4; i++) {
        document.getElementById('img' + i).src = data.images[i - 1];
      }

      slider.classList.add('show-slider');
    } else {
      console.error("Icon data not found for id: " + iconId);
    }
  }

  function closeSlider() {
    slider.classList.remove('show-slider');
    icons.forEach(ic => ic.classList.remove('clicked-icon')); // Remove clicked class when closing slider
  }

  function openOverlay(imgSrc) {
    document.getElementById("overlay-image").src = imgSrc;
    imageOverlay.style.display = 'flex';
  }

  function closeOverlay() {
    imageOverlay.style.display = 'none';
  }

  function openSliderFromOverlay() {
    const activeIconId = document.querySelector('.clicked-icon').id;
    openSlider(activeIconId);
  }

  function scrollToSection(event) {
    event.preventDefault();
    var sectionId = this.getAttribute('href');
    var section = document.querySelector(sectionId);
    var headerOffset = 160;
    var sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = sectionPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  window.addEventListener("click", function() {
    if (!slider.contains(event.target) && !imageOverlay.contains(event.target)) {
      closeSlider();
    }
  });
});
