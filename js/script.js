var hero = document.getElementById('hero');
var images = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5'];

hero.style.backgroundImage =
  "url('../img/" + images[Math.floor(Math.random() * images.length)] + ".jpg')";
console.log(test);
