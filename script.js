const iconData = {
  // Your icon data here (as previously described)
  // Example:
  "icon1": {
    title: "About me",
    description: "Born in 1994 in Santiago, Chile, I grew up as a single child, but making friends has always been my second nature, specially trough games and activities, from inviting my friends to play Nintendo 64 after school, playing trading card games on recces or going into online games to keep in touch at home, my interest has always been to had fun with other people and experience what life has to offer, both online and irl, best of both worlds you could say.   ",
    images: [
        'images/content/me4.png',
        'images/content/me2.png',
        'images/content/me5.png',
    ]
},
    "icon2": {
    title: "Moving to Berlin",
    description: "For what seemed a long time, me and my mom did the paperwork to become german citizens, project on I was the first one to jump ship and move to Berlin obviously, , the experience so far has been lovely, I've made really good friends, got into awesome partys, visited many cool places and built my community and a place i can call home. I've taken it easy and making the best out of it, I've studied german, data science and walked dogs as a side job and a hobby.",
    images: [
        'images/content/me6.png',
        'images/content/me1.png',
        'images/content/me7.png',
    ]
},

  "icon3": {
    title: "Looking for",
    description: "With my good deeds done making educational videogames after college to get experience in this field, what I truly am is a social gamer and designer. My favourite games are MMORPGS and almost every other online games so I can only dream of myself working on one, from the social aspects to the personal fullfillment these games are all about, I very well know what moves me, and bringing those experiences both from life and other games into my work feels just right.",

    images: [
        'images/content/me8.png',
        'images/button3.png',
        'images/button3.png',
    ]
  },
  "icon4": {
    title: "Working with me",
    description: "With whats been said already you may suspect im not shy at work, I try getting around with everyone, I like checking on what they are working on and hearing their ideas, I work best with a team and I quickly adapt to different challenges and projects, In my opinion you cannot make fun games by being boring. Always down for team building activities, best with a beer.",

    images: [
        'images/button4.png',
        'images/button4.png',
        'images/button4.png',

    ]
  },
  "icon5": {
    title: "RAQN",
    description: "Right after graduating college I asked the coolest teacher if I could work with him and I worked on RAQN as Game Designer for the next 3 years, we were an amazing team of 10 doing educational videogames, working with children, teachers and so many other people who were looking to do games for a cause and from the heart, We learnt a lot together and I managed and designed several projects from concept to launch, many of those present in this protfolio, I considerably reduced my responsabilties when moving to Berlin and we cooperate every so often but always keep in touch.",

    images: [
        'images/button1.png',
        'images/button2.png',
        'images/button3.png',
    ]
  },
  "icon6": {
    title: "Forest",
    description: "Forest its a “Netflix” like app for educational videogames, we provided support for online classes with games and other tools. Backed by a teaching process and an analysis of the learning progress. For this project I worked on App Design, App Wireframe, Mockup, Marketing, Translation, Features and improvements.",
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
