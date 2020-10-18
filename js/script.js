var cartItems = [];
var totalF = 0;
var total = document.getElementsByClassName('total')[0];
var category = document.getElementsByClassName('category')[0];
var image = document.getElementsByClassName('img-box')[0];
var modal = document.getElementsByClassName('modal')[0];
var modalBackground = document.getElementsByClassName('modal-background')[0];

if (sessionStorage.cart !== undefined) {
  cartItems = JSON.parse(sessionStorage.getItem('cart'));
}

if ((document.body.id = 'home')) {
  var hero = document.getElementById('hero');
  var images = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5'];
  hero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/dbullard2/pool-party/master/img/" +
    images[Math.floor(Math.random() * images.length)] +
    ".jpg')";
}

document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target;
  if (target.classList.contains('remove')) {
    let removeItem = e.target.parentNode.parentNode
      .querySelector('.front')
      .querySelector('.cart-img').src;
    for (h = 0; h < cartItems.length; h++) {
      if (cartItems[h].image == removeItem) {
        cartItems[h].price = cartItems[h].price.replace(/\$/g, '');
        cartItems[h].price = parseFloat(cartItems[h].price);
        totalF -= parseFloat(cartItems[h].price);
        totalF = totalF.toFixed(2);
        if (isNaN(totalF)) {
          total.innerHTML = '$' + 0;
        } else {
          total.innerHTML = '$' + totalF;
        }

        cartItems.splice(h, 1);
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
      }
    }
    target.parentNode.parentNode.remove();
  }
});

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  let x = document.getElementsByClassName('tab');
  x[n].style.display = 'block';
  if (n == 0) {
    document.getElementById('prevBtn').style.display = 'none';
  } else {
    document.getElementById('prevBtn').style.display = 'inline';
  }

  if (n == x.length - 1) {
    document.getElementById('nextBtn').classList.add('is-hidden');
    document.getElementsByClassName('submit')[0].classList.remove('is-hidden');
  } else {
    document.getElementById('nextBtn').innerHTML = 'Next';
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName('tab');

  x[currentTab].style.display = 'none';
  currentTab += n;
  showTab(currentTab);
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
  var intro = document.getElementsByClassName('intro')[0];
  var arr = JSON.parse(sessionStorage.getItem('cart'));
  for (h = 0; h < arr.length; h++) {
    let cur = arr[h];
    intro.insertAdjacentHTML(
      'afterend',
      '<div class="cart-item"><div class="front"><img class="cart-img" src="' +
        cur.image +
        '" /><p class="is-size-3">' +
        cur.title +
        '</p></div> <div class="back"><p class="is-size-3">' +
        cur.price +
        '</p><p class="is-size-3 has-text-weight-bold remove">X</p></div></div>'
    );
    cur.price = cur.price.replace(/\$/g, '');
    cur.price = parseFloat(cur.price);
    totalF += cur.price;
    total.innerHTML = '$' + totalF;
  }
}
