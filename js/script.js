var category = document.getElementsByClassName('category')[0];
var cartItems = [];
var image = document.getElementsByClassName('img-box')[0];
var modal = document.getElementsByClassName('modal')[0];
var modalBackground = document.getElementsByClassName('modal-background')[0];

if ((document.body.id = 'home')) {
  var hero = document.getElementById('hero');
  var images = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5'];
  hero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/dbullard2/pool-party/master/img/" +
    images[Math.floor(Math.random() * images.length)] +
    ".jpg')";
}

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

//shopping cart functionality
function getInfo(e) {
  const productInfo = {
    image: e.querySelector('img').src,
    title: e.querySelector('h4').textContent,
    price: e.querySelector('p').textContent,
  };
  addToCart(productInfo);
}

function addToCart(e) {
  cartItems.push(e);
  sessionStorage.setItem('cart', JSON.stringify(cartItems));
  var img = e.image;
  image.insertAdjacentHTML('afterbegin', '<img class="rush" src="' + img + '" />');
  modal.classList.add('is-active');
}

function closeModal() {
  var rush = document.getElementsByClassName('rush')[0];
  rush.remove();
  modal.classList.remove('is-active');
}

function loadCart() {
  //document.getElementsByClassName('intro')[0].appendChild(cartItems[0]);
  var intro = document.getElementsByClassName('intro')[0];
  var arr = JSON.parse(sessionStorage.getItem('cart'));
  for (h = 0; h < arr.length; h++) {
    let cur = arr[h];
    intro.insertAdjacentHTML('afterend', '<img src="' + cur.image + '" />');
    console.log(cur.image);
  }
}
