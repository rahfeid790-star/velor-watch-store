/**
 * VÉLOR — Luxury Watch E-Commerce
 * Checkout & Order Registration Engine
 * Generates Unique Order References, persists demo orders in LocalStorage,
 * and formats the official WhatsApp Concierge Dossier for +20 100 684 5910.
 */

const WHATSAPP_PHONE_DISPLAY = "01006845910";
const WHATSAPP_PHONE_INTL = "201006845910";
const ORDERS_STORAGE_KEY = "velor_orders";
const LATEST_ORDER_KEY = "velor_latest_order";

const EGYPT_GOVERNORATES = [
  { id: "cairo", name: "Cairo (القاهرة)" },
  { id: "giza", name: "Giza (الجيزة)" },
  { id: "alexandria", name: "Alexandria (الإسكندرية)" },
  { id: "qalyubia", name: "Qalyubia (القليوبية)" },
  { id: "sharqia", name: "Sharqia (الشرقية)" },
  { id: "dakahlia", name: "Dakahlia / Mansoura (الدقهلية / المنصورة)" },
  { id: "gharbia", name: "Gharbia / Tanta (الغربية / طنطا)" },
  { id: "monufia", name: "Monufia (المنوفية)" },
  { id: "beheira", name: "Beheira (البحيرة)" },
  { id: "ismailia", name: "Ismailia (الإسماعيلية)" },
  { id: "port_said", name: "Port Said (بورسعيد)" },
  { id: "suez", name: "Suez (السويس)" },
  { id: "red_sea", name: "Red Sea / Hurghada / Gouna (البحر الأحمر / الغردقة / الجونة)" },
  { id: "south_sinai", name: "South Sinai / Sharm El-Sheikh (جنوب سيناء / شرم الشيخ)" },
  { id: "luxor_aswan", name: "Luxor & Aswan (الأقصر وأسوان)" }
];

function populateGovernoratesSelect() {
  const select = document.getElementById('checkoutGovernorate');
  if (!select) return;

  const isAr = getCurrentLang() === 'ar';
  let html = `<option value="">${t('selectGovernorate')}</option>`;
  EGYPT_GOVERNORATES.forEach(gov => {
    html += `<option value="${gov.name}">${gov.name}</option>`;
  });
  select.innerHTML = html;
}

function generateOrderReference() {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `VL-${year}-${randomNum}`;
}

function getStoredOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveOrder(order) {
  const orders = getStoredOrders();
  orders.unshift(order);
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  localStorage.setItem(LATEST_ORDER_KEY, JSON.stringify(order));
}

function getLatestOrder() {
  try {
    const raw = localStorage.getItem(LATEST_ORDER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function buildWhatsAppMessage(order) {
  const isAr = getCurrentLang() === 'ar';
  const nl = "\n";

  let msg = `*VÉLOR HAUTE HORLOGERIE — NEW ACQUISITION DOSSIER*${nl}`;
  msg += `------------------------------------------${nl}`;
  msg += `*Order Reference:* ${order.orderRef}${nl}`;
  msg += `*Date:* ${new Date(order.date).toLocaleDateString()} ${new Date(order.date).toLocaleTimeString()}${nl}${nl}`;

  msg += `*CLIENT DOSSIER:*${nl}`;
  msg += `• *Name:* ${order.customer.fullName}${nl}`;
  msg += `• *Phone:* ${order.customer.phone}${nl}`;
  msg += `• *Email:* ${order.customer.email}${nl}`;
  msg += `• *Destination:* ${order.customer.governorate}${nl}`;
  msg += `• *Detailed Address:* ${order.customer.address}${nl}`;
  if (order.customer.notes) {
    msg += `• *Client Notes:* ${order.customer.notes}${nl}`;
  }
  msg += `${nl}*SELECTED TIMEPIECES:*${nl}`;

  order.items.forEach((item, index) => {
    msg += `${index + 1}. *${item.name}* (Ref: ${item.id})${nl}`;
    msg += `   Qty: ${item.quantity} × ${formatEGP(item.unitPrice)}${nl}`;
    if (item.strap) {
      msg += `   Strap: ${item.strap}${nl}`;
    }
  });

  msg += `${nl}*FINANCIAL SUMMARY:*${nl}`;
  msg += `• Atelier Subtotal: ${formatEGP(order.subtotal)}${nl}`;
  if (order.discountAmount > 0) {
    msg += `• Privilege Discount: -${formatEGP(order.discountAmount)}${nl}`;
  }
  msg += `• Insured Shipping: ${order.shipping === 0 ? 'Complimentary' : formatEGP(order.shipping)}${nl}`;
  msg += `• *FINAL TOTAL:* *${formatEGP(order.grandTotal)}*${nl}`;
  msg += `• *Payment Method:* ${order.paymentMethodLabel}${nl}${nl}`;
  msg += `------------------------------------------${nl}`;
  msg += `_Generated via VÉLOR Luxury Web Atelier. Awaiting Concierge Confirmation._`;

  return encodeURIComponent(msg);
}

function buildWhatsAppUrl(order) {
  const encodedText = buildWhatsAppMessage(order);
  return `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodedText}`;
}

// Checkout Form Validation & Processing
function initCheckoutPage() {
  const form = document.getElementById('velorCheckoutForm');
  const reviewContainer = document.getElementById('checkoutReviewItems');
  const checkoutTotalsContainer = document.getElementById('checkoutReviewTotals');

  if (!form) return;

  populateGovernoratesSelect();

  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  // Render Mini Order Summary
  const isAr = getCurrentLang() === 'ar';
  if (reviewContainer) {
    let itemsHtml = '';
    cart.forEach(item => {
      const p = getProductById(item.productId);
      if (!p) return;
      const name = isAr ? p.nameAr : p.name;
      const strap = item.strapName ? (isAr ? (item.strapNameAr || item.strapName) : item.strapName) : '';

      itemsHtml += `
        <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom border-velor-subtle">
          <div class="d-flex align-items-center">
            <img src="${p.image}" onerror="this.onerror=null; this.src='${p.imageFallback}'" 
                 alt="${name}" class="rounded border border-velor-subtle p-1 me-3" style="width: 52px; height: 52px; object-fit: contain;">
            <div>
              <h6 class="mb-0 font-heading text-velor-ivory" style="font-size: 0.9rem;">${name}</h6>
              <small class="text-muted">${strap ? strap + ' • ' : ''}Qty: ${item.quantity}</small>
            </div>
          </div>
          <div class="text-end font-numeric text-velor-lime fw-semibold">
            ${isAr ? formatEGPAr(p.price * item.quantity) : formatEGP(p.price * item.quantity)}
          </div>
        </div>
      `;
    });
    reviewContainer.innerHTML = itemsHtml;
  }

  const totals = getCartTotals();
  if (checkoutTotalsContainer) {
    checkoutTotalsContainer.innerHTML = `
      <div class="d-flex justify-content-between mb-2 text-muted small">
        <span>${t('cartSubtotal')}</span>
        <span class="font-numeric text-velor-ivory">${isAr ? formatEGPAr(totals.subtotal) : formatEGP(totals.subtotal)}</span>
      </div>
      ${totals.discountAmount > 0 ? `
        <div class="d-flex justify-content-between mb-2 text-success small">
          <span>${t('cartDiscount')} (${totals.coupon.code})</span>
          <span class="font-numeric">-${isAr ? formatEGPAr(totals.discountAmount) : formatEGP(totals.discountAmount)}</span>
        </div>
      ` : ''}
      <div class="d-flex justify-content-between mb-3 text-muted small">
        <span>${t('cartShipping')}</span>
        <span>${totals.shipping === 0 ? `<span class="text-velor-lime">${isAr ? 'مجاني ومؤمن' : 'Complimentary'}</span>` : formatEGP(totals.shipping)}</span>
      </div>
      <div class="d-flex justify-content-between align-items-baseline pt-2 border-top border-velor-subtle">
        <span class="fs-5 fw-bold font-heading">${t('cartTotal')}</span>
        <span class="fs-4 font-numeric text-velor-lime fw-bold">${isAr ? formatEGPAr(totals.grandTotal) : formatEGP(totals.grandTotal)}</span>
      </div>
    `;
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullNameInput = document.getElementById('checkoutFullName');
    const phoneInput = document.getElementById('checkoutPhone');
    const emailInput = document.getElementById('checkoutEmail');
    const govInput = document.getElementById('checkoutGovernorate');
    const addressInput = document.getElementById('checkoutAddress');
    const notesInput = document.getElementById('checkoutNotes');
    const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');

    let isValid = true;

    // Reset error states
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

    if (!fullNameInput.value.trim() || fullNameInput.value.trim().length < 3) {
      fullNameInput.classList.add('is-invalid');
      isValid = false;
    }

    // Egyptian phone validation: standard format or international format
    const phoneRegex = /^(01)[0-2,5]{1}[0-9]{8}$|^(\+?201)[0-2,5]{1}[0-9]{8}$/;
    const cleanPhone = phoneInput.value.trim().replace(/\s+/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      phoneInput.classList.add('is-invalid');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!govInput.value) {
      govInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!addressInput.value.trim() || addressInput.value.trim().length < 6) {
      addressInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) {
      showToast(isAr ? "يرجى مراجعة الحقول المطلوبة وتصحيحها" : "Please complete all required fields accurately", 'warning');
      return;
    }

    // Compile Order Object
    const paymentMethodValue = paymentRadio ? paymentRadio.value : 'cod';
    let paymentLabel = 'Cash on Delivery (COD)';
    if (paymentMethodValue === 'whatsapp') paymentLabel = 'Direct WhatsApp Order Concierge';
    if (paymentMethodValue === 'pos') paymentLabel = 'POS Card on Delivery Terminal';

    const orderRef = generateOrderReference();
    const orderItems = cart.map(item => {
      const p = getProductById(item.productId);
      return {
        id: p.id,
        name: p.name,
        nameAr: p.nameAr,
        unitPrice: p.price,
        quantity: item.quantity,
        strap: item.strapName || p.strapOptions[0].name,
        strapAr: item.strapNameAr || p.strapOptions[0].nameAr,
        image: p.image,
        imageFallback: p.imageFallback
      };
    });

    const newOrder = {
      orderRef,
      date: new Date().toISOString(),
      customer: {
        fullName: fullNameInput.value.trim(),
        phone: cleanPhone,
        email: emailInput.value.trim(),
        governorate: govInput.value,
        address: addressInput.value.trim(),
        notes: notesInput ? notesInput.value.trim() : ''
      },
      items: orderItems,
      subtotal: totals.subtotal,
      discountAmount: totals.discountAmount,
      shipping: totals.shipping,
      grandTotal: totals.grandTotal,
      coupon: totals.coupon,
      paymentMethod: paymentMethodValue,
      paymentMethodLabel: paymentLabel,
      status: "Pending White-Glove Dispatch"
    };

    // Save and clear cart
    saveOrder(newOrder);
    clearCart();

    // Show loading feedback & redirect to confirmation
    const submitBtn = document.getElementById('btnSubmitOrder');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> ${t('processingOrder')}`;
    }

    setTimeout(() => {
      window.location.href = `order-confirmation.html?ref=${orderRef}`;
    }, 1200);
  });
}

// Order Confirmation Page Initializer
function initOrderConfirmationPage() {
  const container = document.getElementById('orderConfirmationDetails');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('ref');

  let order = null;
  const storedOrders = getStoredOrders();
  if (refParam) {
    order = storedOrders.find(o => o.orderRef === refParam);
  }
  if (!order) {
    order = getLatestOrder();
  }

  const isAr = getCurrentLang() === 'ar';

  if (!order) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-exclamation-triangle text-warning display-4 mb-3"></i>
        <h4 class="font-heading">${isAr ? 'لم يتم العثور على بيانات الطلب' : 'No Order Record Found'}</h4>
        <p class="text-muted">${isAr ? 'يبدو أنك لم تقم بتسجيل طلب جديد مؤخراً.' : 'You have not submitted any recent acquisitions in this browser session.'}</p>
        <a href="shop.html" class="btn btn-velor-primary mt-3">${t('cartContinueShopping')}</a>
      </div>
    `;
    return;
  }

  // Set Order Ref in Hero
  const refDisplay = document.getElementById('confirmationOrderRef');
  if (refDisplay) {
    refDisplay.textContent = order.orderRef;
  }

  // Configure Direct WhatsApp Button
  const waUrl = buildWhatsAppUrl(order);
  const waBtn = document.getElementById('btnConfirmWhatsApp');
  if (waBtn) {
    waBtn.setAttribute('href', waUrl);
    waBtn.setAttribute('target', '_blank');
    waBtn.setAttribute('rel', 'noopener noreferrer');
  }

  // Render Detailed Invoice Breakdown
  let itemsHtml = '';
  order.items.forEach(item => {
    const itemName = isAr ? (item.nameAr || item.name) : item.name;
    const itemStrap = isAr ? (item.strapAr || item.strap) : item.strap;
    itemsHtml += `
      <li class="list-group-item bg-transparent text-velor-ivory border-velor-subtle px-0 py-3 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img src="${item.image}" onerror="this.onerror=null; this.src='${item.imageFallback}'" 
               alt="${itemName}" class="rounded border border-velor-subtle p-1 me-3" style="width: 50px; height: 50px; object-fit: contain;">
          <div>
            <h6 class="mb-0 font-heading text-velor-ivory">${itemName}</h6>
            <small class="text-muted">${itemStrap ? itemStrap + ' • ' : ''}Qty: ${item.quantity}</small>
          </div>
        </div>
        <div class="font-numeric text-velor-lime fw-bold">
          ${isAr ? formatEGPAr(item.unitPrice * item.quantity) : formatEGP(item.unitPrice * item.quantity)}
        </div>
      </li>
    `;
  });

  container.innerHTML = `
    <div class="card p-4 p-md-5 border-0 bg-velor-card text-velor-ivory shadow-lg">
      <div class="row g-4 pb-4 border-bottom border-velor-subtle">
        <div class="col-md-6">
          <span class="text-muted small text-uppercase letter-spacing-1 d-block mb-1" data-i18n="confirmDate">${t('confirmDate')}</span>
          <p class="fs-6 font-numeric fw-semibold mb-0">${new Date(order.date).toLocaleDateString()} — ${new Date(order.date).toLocaleTimeString()}</p>
        </div>
        <div class="col-md-6">
          <span class="text-muted small text-uppercase letter-spacing-1 d-block mb-1" data-i18n="confirmPaymentMethod">${t('confirmPaymentMethod')}</span>
          <span class="badge bg-velor-emerald text-velor-lime px-3 py-2 fs-6">
            <i class="bi bi-shield-check me-1"></i> ${order.paymentMethodLabel}
          </span>
        </div>
      </div>

      <div class="row g-4 py-4 border-bottom border-velor-subtle">
        <div class="col-md-6">
          <span class="text-muted small text-uppercase letter-spacing-1 d-block mb-1" data-i18n="confirmContact">${t('confirmContact')}</span>
          <p class="mb-1 fw-bold">${order.customer.fullName}</p>
          <p class="mb-1 text-muted"><i class="bi bi-telephone text-velor-lime me-2"></i>${order.customer.phone}</p>
          <p class="mb-0 text-muted"><i class="bi bi-envelope text-velor-lime me-2"></i>${order.customer.email}</p>
        </div>
        <div class="col-md-6">
          <span class="text-muted small text-uppercase letter-spacing-1 d-block mb-1" data-i18n="confirmDeliveryTo">${t('confirmDeliveryTo')}</span>
          <p class="mb-1 text-velor-champagne fw-semibold">${order.customer.governorate}</p>
          <p class="mb-0 text-muted">${order.customer.address}</p>
          ${order.customer.notes ? `<p class="mt-2 text-warning small fst-italic"><i class="bi bi-info-circle me-1"></i> "${order.customer.notes}"</p>` : ''}
        </div>
      </div>

      <div class="py-4">
        <h5 class="font-heading mb-3" data-i18n="confirmItems">${t('confirmItems')}</h5>
        <ul class="list-group list-group-flush">
          ${itemsHtml}
        </ul>
      </div>

      <div class="pt-4 border-top border-velor-subtle">
        <div class="d-flex justify-content-between mb-2 text-muted">
          <span>${t('cartSubtotal')}</span>
          <span class="font-numeric text-velor-ivory">${isAr ? formatEGPAr(order.subtotal) : formatEGP(order.subtotal)}</span>
        </div>
        ${order.discountAmount > 0 ? `
          <div class="d-flex justify-content-between mb-2 text-success">
            <span>${t('cartDiscount')}</span>
            <span class="font-numeric">-${isAr ? formatEGPAr(order.discountAmount) : formatEGP(order.discountAmount)}</span>
          </div>
        ` : ''}
        <div class="d-flex justify-content-between mb-3 text-muted">
          <span>${t('cartShipping')}</span>
          <span>${order.shipping === 0 ? `<span class="text-velor-lime">${isAr ? 'شحن مجاني مؤمن' : 'Complimentary'}</span>` : formatEGP(order.shipping)}</span>
        </div>
        <div class="d-flex justify-content-between align-items-baseline pt-3 border-top border-velor-subtle">
          <span class="fs-4 font-heading fw-bold">${t('cartTotal')}</span>
          <span class="fs-3 font-numeric text-velor-lime fw-bold">${isAr ? formatEGPAr(order.grandTotal) : formatEGP(order.grandTotal)}</span>
        </div>
      </div>
    </div>
  `;
}

// Demo Order History Modal
function showOrderHistoryModal() {
  const orders = getStoredOrders();
  const isAr = getCurrentLang() === 'ar';
  let modal = document.getElementById('velorOrderHistoryModal');

  if (!modal) {
    const div = document.createElement('div');
    div.id = 'velorOrderHistoryModal';
    div.className = 'modal fade';
    div.tabIndex = -1;
    div.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-velor-card text-velor-ivory border-velor-gold">
          <div class="modal-header border-velor-subtle">
            <h5 class="modal-title font-heading">${isAr ? 'سجل الطلبات التجريبية المسجلة' : 'Registered Demo Acquisition Dossiers'}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4" id="orderHistoryModalBody">
          </div>
          <div class="modal-footer border-velor-subtle">
            <button type="button" class="btn btn-outline-velor-subtle" data-bs-dismiss="modal">${isAr ? 'إغلاق' : 'Close'}</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(div);
    modal = div;
  }

  const body = document.getElementById('orderHistoryModalBody');
  if (orders.length === 0) {
    body.innerHTML = `
      <p class="text-muted text-center py-4 mb-0">${isAr ? 'لا توجد طلبات سابقة مسجلة في هذا المتصفح.' : 'No prior acquisitions registered in this browser session.'}</p>
    `;
  } else {
    let listHtml = '';
    orders.forEach(o => {
      listHtml += `
        <div class="card bg-velor-surface border border-velor-subtle p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="fw-bold text-velor-lime font-numeric">${o.orderRef}</span>
            <span class="badge bg-velor-emerald text-velor-champagne">${o.status}</span>
          </div>
          <p class="text-muted small mb-1">
            <i class="bi bi-calendar3 me-1"></i> ${new Date(o.date).toLocaleDateString()} • 
            <i class="bi bi-person me-1"></i> ${o.customer.fullName} • 
            <i class="bi bi-geo-alt me-1"></i> ${o.customer.governorate}
          </p>
          <div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top border-velor-subtle">
            <span class="small text-muted">${o.items.length} ${isAr ? 'ساعة / ساعات' : 'timepiece(s)'}</span>
            <div class="d-flex align-items-center gap-2">
              <span class="font-numeric fw-bold text-velor-champagne">${isAr ? formatEGPAr(o.grandTotal) : formatEGP(o.grandTotal)}</span>
              <a href="order-confirmation.html?ref=${o.orderRef}" class="btn btn-sm btn-outline-velor-gold py-0 px-2" style="font-size: 0.75rem;">
                ${isAr ? 'عرض الإيصال' : 'View Receipt'}
              </a>
            </div>
          </div>
        </div>
      `;
    });
    body.innerHTML = listHtml;
  }

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

document.addEventListener('DOMContentLoaded', () => {
  initCheckoutPage();
  initOrderConfirmationPage();

  const historyBtn = document.getElementById('btnViewOrderHistory');
  if (historyBtn) {
    historyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showOrderHistoryModal();
    });
  }
});

window.addEventListener('velor:langChange', () => {
  initCheckoutPage();
  initOrderConfirmationPage();
});

