// js/intro.js

document.addEventListener("DOMContentLoaded", () => {
  // Ensure anime.js library is loaded before running animations
  if (typeof anime !== 'undefined') {
    
    // Create an animation timeline
    const introTimeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    // 1. Fade and slide down the navigation bar
    introTimeline.add({
      targets: '.navBar',
      translateY: [-50, 0],
      opacity:,
      duration: 800
    });

    // 2. Pop-in the center logo with a slight bounce effect
    introTimeline.add({
      targets: '#introLogo',
      scale: [0.5, 1],
      opacity:,
      easing: 'spring(1, 80, 10, 0)',
      duration: 1200
    }, '-=400');

    // 3. Slide up the main text elements one by one (staggered)
    introTimeline.add({
      targets: '.IntroMsg h1, .tagline, .services-badge, .cta-btn',
      translateY:,
      opacity:,
      delay: anime.stagger(150),
      duration: 800
    }, '-=600');

    // 4. Fade in the pricing cards smoothly from the bottom
    introTimeline.add({
      targets: '.menu-card',
      translateY:,
      opacity:,
      delay: anime.stagger(200),
      duration: 1000
    }, '-=400');

  } else {
    console.warn("Anime.js library not detected. Running without animations.");
  }
});
