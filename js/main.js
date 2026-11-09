/**
 * VÉLOR & WATCHSHOP — Master UI Engine
 * Strictly Watch-Only Products & Egyptian Pound (EGP) Pricing
 * Handles Wishlist, Cart, Quick View, Search, and Catalog Rendering.
 */

const WISHLIST_STORAGE_KEY = 'velor_wishlist';

function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
    updateWishlistBadges();
    window.dispatchEvent(new CustomEvent('velor:wishlistUpdated', { detail: { list } }));
  } catch (e) {
    console.error('Error saving wishlist', e);
  }
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

function toggleWishlist(productId) {
  let list = getWishlist();
  const index = list.indexOf(productId);
  const isAr = typeof getCurrentLang === 'function' ? getCurrentLang() === 'ar' : false;
  const product = typeof getProductById === 'function' ? getProductById(productId) : null;
  const name = product ? (isAr ? product.nameAr : product.name) : 'Watch';

  if (index > -1) {
    list.splice(index, 1);
    saveWishlist(list);
    showToast(isAr ? `تمت إزالة "${name}" من المفضلة` : `"${name}" removed from wishlist`, 'info');
  } else {
    list.push(productId);
    saveWishlist(list);
    showToast(isAr ? `تمت إضافة "${name}" إلى المفضلة` : `"${name}" added to your wishlist`, 'success');
  }

  document.querySelectorAll(`.ws-wishlist-heart[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', list.includes(productId));
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = list.includes(productId) ? 'bi bi-heart-fill text-danger' : 'bi bi-heart';
    }
  });
}

function updateWishlistBadges() {
  const count = getWishlist().length;
  document.querySelectorAll('.velor-wishlist-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showToast(message, type = 'info') {
  let container = document.getElementById('velorToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'velorToastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = '1090';
    document.body.appendChild(container);
  }

  const toastId = 'toast-' + Date.now();
  let icon = 'bi-info-circle-fill text-primary';
  if (type === 'success') icon = 'bi-check-circle-fill text-success';
  if (type === 'warning') icon = 'bi-exclamation-triangle-fill text-warning';

  const html = `
    <div id="${toastId}" class="toast align-items-center bg-white border shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center text-dark">
          <i class="bi ${icon} fs-5 me-2"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
  const toastEl = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3000 });
  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}

// Product Card Generator with strict EGP pricing
function createProductCard(product) {
  const isAr = typeof getCurrentLang === 'function' ? getCurrentLang() === 'ar' : false;
  const name = isAr ? product.nameAr : product.name;
  const movement = isAr ? product.movementTypeAr : `${product.movementType} - ${product.category === 'women' ? "Women's" : product.category === 'unisex' ? "Unisex" : "Men's"}`;
  const inWish = isInWishlist(product.id);
  const priceDisplay = isAr ? formatEGPAr(product.price) : formatEGP(product.price);

  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl ws-product-col" data-id="${product.id}">
      <div class="ws-product-card shadow-sm">
        <button class="ws-wishlist-heart ${inWish ? 'active' : ''}" data-id="${product.id}" title="Wishlist">
          <i class="bi ${inWish ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
        </button>

        <a href="product-details.html?id=${product.id}" class="ws-product-img-wrap text-decoration-none">
          <img src="${product.image}" onerror="this.onerror=null; this.src='${product.imageFallback}'" 
               alt="${name}" class="ws-product-img img-fluid" loading="lazy">
        </a>

        <div>
          <a href="product-details.html?id=${product.id}" class="ws-product-title">
            ${name}
          </a>
          <div class="ws-product-cat">${movement}</div>

          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="ws-product-price font-numeric">${priceDisplay}</div>
            <div class="text-warning small font-numeric">
              <i class="bi bi-star-fill text-warning"></i>
              <span class="text-dark fw-bold ms-1">${product.rating}</span>
              <span class="text-muted" style="font-size: 0.72rem;">(${product.reviewsCount})</span>
            </div>
          </div>

          <button class="ws-btn-add-cart btn-card-add-cart" data-id="${product.id}">
            <i class="bi bi-bag-plus me-1"></i> ${isAr ? 'إضافة إلى السلة' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindProductEvents() {
  document.querySelectorAll('.ws-wishlist-heart').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(btn.getAttribute('data-id'));
    };
  });

  document.querySelectorAll('.btn-card-add-cart').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      if (typeof addToCart === 'function') {
        addToCart(id, 1);
      }
    };
  });
}

function initShowcases() {
  // Best Sellers (5 Watch products)
  const bestGrid = document.getElementById('homeBestSellersGrid');
  if (bestGrid && typeof VELOR_PRODUCTS !== 'undefined') {
    const bestItems = VELOR_PRODUCTS.filter(p => p.isBestSeller && p.id !== 'ROLEX-DJ41-GRN').slice(0, 5);
    bestGrid.innerHTML = bestItems.map(p => createProductCard(p)).join('');
  }

  // Latest Arrivals (4 Watch products)
  const latestGrid = document.getElementById('homeLatestArrivalsGrid');
  if (latestGrid && typeof VELOR_PRODUCTS !== 'undefined') {
    const latestItems = VELOR_PRODUCTS.filter(p => p.isNewArrival).slice(0, 4);
    latestGrid.innerHTML = latestItems.map(p => createProductCard(p)).join('');
  }

  bindProductEvents();
}

document.addEventListener('DOMContentLoaded', () => {
  initShowcases();
  updateWishlistBadges();

  const searchInputs = document.querySelectorAll('.ws-search-input');
  searchInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        window.location.href = `shop.html?q=${encodeURIComponent(input.value.trim())}`;
      }
    });
  });

  document.querySelectorAll('.velor-lang-toggle').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      if (typeof toggleLanguage === 'function') {
        toggleLanguage();
      }
    };
  });
});

window.addEventListener('velor:langChange', () => {
  initShowcases();
  updateWishlistBadges();
});
