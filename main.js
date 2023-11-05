(function() {
    // Wait until the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      const body = document.body;
      const numberOfSprinkles = 400; // Adjust the number based on your preference
  
      for (let i = 0; i < numberOfSprinkles; i++) {
        const sprinkle = document.createElement('div');
        sprinkle.classList.add('sprinkle');
        sprinkle.classList.add(`sprinkle-color-${Math.ceil(Math.random() * 5)}`); // Assuming 5 sprinkle colors
        sprinkle.style.left = `${Math.random() * 100}%`;
        sprinkle.style.top = `${Math.random() * 100}%`;
        sprinkle.style.transform = `rotate(${Math.random() * 360}deg)`;
  
        body.appendChild(sprinkle);
      }
    });
  })();

  function toggleNavbar() {
    var x = document.getElementById("navbar-fullscreen");
    x.style.display = (x.style.display === "block") ? "none" : "block";
  }
  
  
  
  