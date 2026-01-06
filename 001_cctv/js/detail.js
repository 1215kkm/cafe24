/**
 * YOURLOGO - Product Detail JavaScript
 * 상품 상세 페이지 전용 스크립트
 */

// Quantity Change Function
function changeQty(delta) {
  const qty = document.getElementById('quantity');
  if (qty) {
    const newVal = parseInt(qty.value) + delta;
    if (newVal >= 1) {
      qty.value = newVal;
      updateTotalPrice();
    }
  }
}

// Update Total Price (for preview)
function updateTotalPrice() {
  const qty = document.getElementById('quantity');
  const totalPriceEl = document.querySelector('.total-price strong');
  const currentPriceEl = document.querySelector('.current-price');

  if (qty && totalPriceEl && currentPriceEl) {
    const priceText = currentPriceEl.textContent.replace(/[^0-9]/g, '');
    const price = parseInt(priceText);
    const quantity = parseInt(qty.value);
    const total = price * quantity;

    totalPriceEl.textContent = total.toLocaleString() + '원';

    // Update quantity text
    const totalLabel = document.querySelector('.total-price span');
    if (totalLabel) {
      totalLabel.textContent = '총 상품금액 (' + quantity + '개)';
    }
  }
}

// Tab Navigation Function
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-nav button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(function(b) {
        b.classList.remove('active');
      });

      // Add active class to clicked button
      this.classList.add('active');

      // Hide all tab contents
      tabContents.forEach(function(content) {
        content.style.display = 'none';
      });

      // Show selected tab content
      const tabId = 'tab-' + this.dataset.tab;
      const targetTab = document.getElementById(tabId);
      if (targetTab) {
        targetTab.style.display = 'block';
      }
    });
  });

  // Thumbnail Image Click Handler
  const thumbImages = document.querySelectorAll('.thumb-list img');
  const bigImage = document.getElementById('bigImage');

  thumbImages.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      // Remove active class from all thumbnails
      thumbImages.forEach(function(t) {
        t.classList.remove('active');
      });

      // Add active class to clicked thumbnail
      this.classList.add('active');

      // Update big image
      if (bigImage) {
        const newSrc = this.src.replace('w=200', 'w=800');
        bigImage.src = newSrc;
      }
    });
  });

  // Initialize quantity input
  const qtyInput = document.getElementById('quantity');
  if (qtyInput) {
    qtyInput.addEventListener('change', function() {
      let val = parseInt(this.value);
      if (isNaN(val) || val < 1) {
        this.value = 1;
      }
      updateTotalPrice();
    });
  }
});
