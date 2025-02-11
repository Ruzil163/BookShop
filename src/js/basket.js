const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    console.error('Error parsing cart from localStorage', e);
    return [];
  }
}

function updateCartCount() {
  const cart = getCart();
  cartCount.textContent = cart.length;
}

function addToCart(book) {
  const cart = getCart();
  const bookExists = cart.some(item => item.id === book.id);

  if (!bookExists) {
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  updateCartCount();
}

const exampleBook = {
  id: '1',
  title: 'JavaScript for Beginners',
  price: 29.99,
  author: 'John Doe',
};

const buyNowButton = document.querySelector('.buy-now');
if (buyNowButton) {
  buyNowButton.addEventListener('click', () => {
    addToCart(exampleBook);
  });
}

updateCartCount();