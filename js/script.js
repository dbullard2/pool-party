var hero = document.getElementById('hero');
var images = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5'];
var category = document.getElementsByClassName('category')[0];
hero.style.backgroundImage =
  "url('https://raw.githubusercontent.com/dbullard2/pool-party/master/img/" +
  images[Math.floor(Math.random() * images.length)] +
  ".jpg')";

//filter items by shopping category
filterSelection('all');
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('canHide');
  if (c == 'all') {
    c = '';
    category.innerHTML = 'All';
  } else if (c == 0) {
    category.innerHTML = 'Mens';
  } else if (c == 1) {
    category.innerHTML = 'Womens';
  }

  for (i = 0; i < x.length; i++) {
    x[i].classList.add('is-hidden');
    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.remove('is-hidden');
    }
  }
}
