/**
 * VÉLOR — Luxury Watch E-Commerce
 * Cart Engine & State Management
 * Persisted via LocalStorage
 */

const CART_STORAGE_KEY = 'velor_cart';
const COUPON_STORAGE_KEY = 'velor_coupon';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading cart from LocalStorage', e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
    window.dispatchEvent(new CustomEvent('velor:cartUpdated', { detail: { cart } }));
  } catch (e) {
    console.error('Error saving cart to LocalStorage', e);
  }
}

function addToCart(productId, quantity = 1, strapId = null) {
  const product = getProductById(productId);
  if (!product) return false;

  const cart = getCart();
  const existingIndex = cart.findIndex(item => 
    item.productId === productId && (!strapId || item.strapId === strapId)
  );

  const chosenStrap = strapId 
    ? (product.strapOptions.find(s => s.id === strapId) || null) 
    : (product.strapOptions ? product.strapOptions[0] : null);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      quantity: quantity,
      strapId: chosenStrap ? chosenStrap.id : null,
      strapName: chosenStrap ? chosenStrap.name : null,
      strapNameAr: chosenStrap ? chosenStrap.nameAr : null,
      addedAt: new Date().toISOString()
    });
  }

  saveCart(cart);

  // Show Toast
  const isAr = getCurrentLang() === 'ar';
  const name = isAr ? product.nameAr : product.name;
  showToast(
    isAr ? `تمت إضافة "${name}" إلى حقيبتك الفاخرة` : `"${name}" added to your atelier selection`,
    'success'
  );

  return true;
}

function removeFromCart(productId, strapId = null) {
  let cart = getCart();
  cart = cart.filter(item => !(item.productId === productId && (!strapId || item.strapId === strapId)));
  saveCart(cart);

  const isAr = getCurrentLang() === 'ar';
  showToast(isAr ? "تم حذف القطعة من حقيبة الشراء" : "Timepiece removed from selection", 'info');
}

function updateCartQuantity(productId, quantity, strapId = null) {
  const cart = getCart();
  const item = cart.find(i => i.productId === productId && (!strapId || i.strapId === strapId));
  
  if (item) {
    item.quantity = Math.max(1, parseInt(quantity, 10) || 1);
    saveCart(cart);
  }
}

function clearCart() {
  saveCart([]);
  localStorage.removeItem(COUPON_STORAGE_KEY);
}

function getAppliedCoupon() {
  try {
    const raw = localStorage.getItem(COUPON_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function applyCouponCode(code) {
  const clean = (code || '').trim().toUpperCase();
  let coupon = null;

  if (clean === 'VELOR10') {
    coupon = { code: 'VELOR10', discountPercent: 10, name: 'Atelier Privilege 10%' };
  } else if (clean === 'NOCTURNE') {
    coupon = { code: 'NOCTURNE', discountPercent: 15, name: 'Nocturne Suite 15%' };
  } else if (clean === 'VIP20') {
    coupon = { code: 'VIP20', discountPercent: 20, name: 'Private Circle 20%' };
  }

  if (coupon) {
    localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
    window.dispatchEvent(new CustomEvent('velor:cartUpdated', { detail: { cart: getCart() } }));
    return { success: true, coupon };
  }

  return { success: false, message: t('cartCouponInvalid') };
}

function removeCouponCode() {
  localStorage.removeItem(COUPON_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('velor:cartUpdated', { detail: { cart: getCart() } }));
}

function getCartTotals() {
  const cart = getCart();
  let subtotal = 0;
  let totalItems = 0;

  cart.forEach(item => {
    const p = getProductById(item.productId);
    if (p) {
      subtotal += p.price * item.quantity;
      totalItems += item.quantity;
    }
  });

  const coupon = getAppliedCoupon();
  let discountAmount = 0;
  if (coupon && subtotal > 0) {
    discountAmount = Math.round((subtotal * coupon.discountPercent) / 100);
  }

  // Free insured shipping above 1,500 EGP or empty cart
  const shipping = subtotal > 0 && subtotal < 1500 ? 60 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  return {
    subtotal,
    discountAmount,
    coupon,
    shipping,
    grandTotal,
    totalItems
  };
}

function updateCartBadges() {
  const cart = getCart();
  const count = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  document.querySelectorAll('.velor-cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// Render Cart Page Function
function renderCartPage() {
  const cartContainer = document.getElementById('cartItemsContainer');
  const cartSummaryContainer = document.getElementById('cartSummaryContainer');
  const emptyCartState = document.getElementById('emptyCartState');
  const cartContentWrapper = document.getElementById('cartContentWrapper');

  if (!cartContainer) return;

  const cart = getCart();
  const isAr = getCurrentLang() === 'ar';

  if (cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove('d-none');
    if (cartContentWrapper) cartContentWrapper.classList.add('d-none');
    return;
  }

  if (emptyCartState) emptyCartState.classList.add('d-none');
  if (cartContentWrapper) cartContentWrapper.classList.remove('d-none');

  let html = '';
  cart.forEach((item, index) => {
    const product = getProductById(item.productId);
    if (!product) return;

    const name = isAr ? product.nameAr : product.name;
    const collection = isAr ? product.collectionAr : product.collection;
    const strap = item.strapName 
      ? (isAr ? (item.strapNameAr || item.strapName) : item.strapName)
      : (isAr ? product.strapOptions[0].nameAr : product.strapOptions[0].name);

    const priceFormatted = isAr ? formatEGPAr(product.price) : formatEGP(product.price);
    const lineTotal = product.price * item.quantity;
    const lineTotalFormatted = isAr ? formatEGPAr(lineTotal) : formatEGP(lineTotal);

    html += `
      <div class="velor-cart-item card p-3 p-md-4 mb-3 border-0 bg-velor-card">
        <div class="row align-items-center g-3">
          <div class="col-3 col-md-2 text-center">
            <a href="product-details.html?id=${product.id}">
              <img src="${product.image}" onerror="this.onerror=null; this.src='${product.imageFallback}'" 
                   alt="${name}" class="img-fluid rounded border border-velor-subtle p-1" style="max-height: 100px; object-fit: contain;">
            </a>
          </div>
          <div class="col-9 col-md-4">
            <span class="badge bg-velor-emerald-subtle text-velor-lime mb-1 text-uppercase" style="font-size: 0.7rem; letter-spacing: 1px;">
              ${collection}
            </span>
            <h5 class="mb-1 font-heading">
              <a href="product-details.html?id=${product.id}" class="text-decoration-none text-velor-ivory hover-lime">
                ${name}
              </a>
            </h5>
            <p class="text-muted small mb-0">
              <i class="bi bi-gear-fill me-1"></i> ${isAr ? 'السوار: ' : 'Strap: '} <span class="text-velor-champagne">${strap}</span>
            </p>
            <div class="d-md-none mt-2 font-numeric text-velor-champagne fw-semibold">
              ${priceFormatted}
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="input-group input-group-sm velor-qty-group" style="max-width: 130px;">
              <button class="btn btn-outline-velor-gold btn-qty-dec" type="button" data-id="${product.id}" data-strap="${item.strapId || ''}">-</button>
              <input type="number" class="form-control text-center bg-transparent text-velor-ivory border-velor-subtle cart-qty-input font-numeric" 
                     value="${item.quantity}" min="1" max="10" data-id="${product.id}" data-strap="${item.strapId || ''}">
              <button class="btn btn-outline-velor-gold btn-qty-inc" type="button" data-id="${product.id}" data-strap="${item.strapId || ''}">+</button>
            </div>
          </div>
          <div class="col-4 col-md-2 text-end">
            <span class="font-numeric fs-6 text-velor-lime fw-bold d-block">${lineTotalFormatted}</span>
            <small class="text-muted d-none d-md-block font-numeric">(${priceFormatted} / ${isAr ? 'قطعة' : 'ea'})</small>
          </div>
          <div class="col-2 col-md-1 text-end">
            <button class="btn btn-link text-danger p-0 btn-remove-item hover-scale" 
                    data-id="${product.id}" data-strap="${item.strapId || ''}" 
                    title="${isAr ? 'حذف من الحقيبة' : 'Remove item'}">
              <i class="bi bi-trash3 fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML = html;

  // Render Totals
  const totals = getCartTotals();
  if (cartSummaryContainer) {
    const couponHtml = totals.coupon ? `
      <div class="d-flex justify-content-between align-items-center text-success mb-2">
        <span><i class="bi bi-tag-fill me-1"></i> ${totals.coupon.name}</span>
        <div class="d-flex align-items-center">
          <span class="font-numeric me-2">-${isAr ? formatEGPAr(totals.discountAmount) : formatEGP(totals.discountAmount)}</span>
          <button class="btn btn-link btn-sm text-danger p-0" id="btnRemoveCoupon" title="${isAr ? 'إلغاء الكود' : 'Remove coupon'}">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
      </div>
    ` : '';

    const shippingText = totals.shipping === 0 
      ? `<span class="text-velor-lime">${isAr ? 'مجاني (مؤمن بالكامل)' : 'Complimentary (Insured)'}</span>`
      : `<span class="font-numeric">${isAr ? formatEGPAr(totals.shipping) : formatEGP(totals.shipping)}</span>`;

    cartSummaryContainer.innerHTML = `
      <div class="card p-4 border-0 bg-velor-card text-velor-ivory sticky-top" style="top: 100px;">
        <h4 class="font-heading mb-4 pb-2 border-bottom border-velor-subtle" data-i18n="orderSummary">
          ${t('orderSummary')}
        </h4>
        
        <div class="d-flex justify-content-between mb-3 text-muted">
          <span data-i18n="cartSubtotal">${t('cartSubtotal')}</span>
          <span class="font-numeric text-velor-ivory">${isAr ? formatEGPAr(totals.subtotal) : formatEGP(totals.subtotal)}</span>
        </div>

        ${couponHtml}

        <div class="d-flex justify-content-between mb-3 text-muted">
          <span data-i18n="cartShipping">${t('cartShipping')}</span>
          ${shippingText}
        </div>

        <div class="my-3">
          <div class="input-group">
            <input type="text" id="couponInput" class="form-control form-control-sm bg-velor-surface text-velor-ivory border-velor-subtle" 
                   placeholder="${t('cartCouponPlaceholder')}" value="${totals.coupon ? totals.coupon.code : ''}">
            <button class="btn btn-outline-velor-gold btn-sm px-3" type="button" id="btnApplyCoupon" data-i18n="cartCouponApply">
              ${t('cartCouponApply')}
            </button>
          </div>
          <small class="text-muted d-block mt-1" style="font-size: 0.75rem;">
            ${isAr ? 'جرب كود: VELOR10 لخصم 10%' : 'Try code: VELOR10 for 10% privilege discount'}
          </small>
        </div>

        <hr class="border-velor-subtle my-3">

        <div class="d-flex justify-content-between align-items-baseline mb-4">
          <span class="fs-5 fw-bold font-heading" data-i18n="cartTotal">${t('cartTotal')}</span>
          <span class="fs-4 font-numeric text-velor-lime fw-bold">
            ${isAr ? formatEGPAr(totals.grandTotal) : formatEGP(totals.grandTotal)}
          </span>
        </div>

        <a href="checkout.html" class="btn btn-velor-primary btn-lg w-100 py-3 mb-2 fw-semibold letter-spacing-1 text-uppercase text-decoration-none text-center">
          <i class="bi bi-shield-check me-2"></i> ${t('cartCheckoutBtn')}
        </a>

        <a href="shop.html" class="btn btn-outline-velor-subtle w-100 py-2 text-decoration-none text-center text-muted hover-lime">
          <i class="bi bi-arrow-left me-1"></i> ${t('cartContinueShopping')}
        </a>

        <div class="mt-4 pt-3 border-top border-velor-subtle text-center text-muted small">
          <p class="mb-1"><i class="bi bi-lock-fill text-velor-lime me-1"></i> ${isAr ? 'طلب تجريبي آمن 100%' : '100% Secure Demo Acquisition'}</p>
          <p class="mb-0" style="font-size: 0.72rem;">${isAr ? 'تسليم بالقفازات البيضاء مع خيار الفحص قبل الدفع' : 'White-glove courier inspection prior to payment'}</p>
        </div>
      </div>
    `;

    // Bind Coupon Events
    const btnApply = document.getElementById('btnApplyCoupon');
    if (btnApply) {
      btnApply.addEventListener('click', () => {
        const inp = document.getElementById('couponInput');
        if (inp && inp.value) {
          const res = applyCouponCode(inp.value);
          if (res.success) {
            showToast(t('cartCouponSuccess'), 'success');
            renderCartPage();
          } else {
            showToast(res.message, 'warning');
          }
        }
      });
    }

    const btnRemove = document.getElementById('btnRemoveCoupon');
    if (btnRemove) {
      btnRemove.addEventListener('click', () => {
        removeCouponCode();
        showToast(isAr ? "تم حذف كود الخصم" : "Coupon removed", 'info');
        renderCartPage();
      });
    }
  }

  // Bind Quantity and Remove Listeners
  bindCartItemListeners();
}

function bindCartItemListeners() {
  document.querySelectorAll('.btn-qty-inc').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const strap = btn.getAttribute('data-strap') || null;
      const inp = btn.parentElement.querySelector('.cart-qty-input');
      const current = parseInt(inp.value, 10) || 1;
      updateCartQuantity(id, current + 1, strap);
      renderCartPage();
    });
  });

  document.querySelectorAll('.btn-qty-dec').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const strap = btn.getAttribute('data-strap') || null;
      const inp = btn.parentElement.querySelector('.cart-qty-input');
      const current = parseInt(inp.value, 10) || 1;
      if (current > 1) {
        updateCartQuantity(id, current - 1, strap);
        renderCartPage();
      }
    });
  });

  document.querySelectorAll('.cart-qty-input').forEach(inp => {
    inp.addEventListener('change', (e) => {
      const id = inp.getAttribute('data-id');
      const strap = inp.getAttribute('data-strap') || null;
      const val = parseInt(inp.value, 10) || 1;
      updateCartQuantity(id, val, strap);
      renderCartPage();
    });
  });

  document.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const strap = btn.getAttribute('data-strap') || null;
      removeFromCart(id, strap);
      renderCartPage();
    });
  });
}

// Initialise Badges on Dom Ready
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  if (document.getElementById('cartItemsContainer')) {
    renderCartPage();
  }
});

window.addEventListener('velor:langChange', () => {
  updateCartBadges();
  if (document.getElementById('cartItemsContainer')) {
    renderCartPage();
  }
});

