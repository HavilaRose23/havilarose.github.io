(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // Create overlay
    var overlay = document.createElement('div');
    overlay.id = 'lb-overlay';

    var img = document.createElement('img');
    img.id = 'lb-img';
    img.alt = '';

    var closeBtn = document.createElement('button');
    closeBtn.id = 'lb-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close');

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    // Open lightbox
    function openLightbox(src, alt) {
      img.src = src;
      img.alt = alt || '';
      overlay.classList.add('lb-active');
      document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
      overlay.classList.remove('lb-active');
      document.body.style.overflow = '';
      setTimeout(function () { img.src = ''; }, 300);
    }

    // Attach click to all gallery images
    var selectors = [
      '.image-gallery img',
      '.vis-grid img',
      '.concept-grid img'
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.addEventListener('click', function () {
          openLightbox(this.src, this.alt);
        });
      });
    });

    // Close on overlay click (but not image click)
    overlay.addEventListener('click', function (e) {
      if (e.target !== img) closeLightbox();
    });

    // Close button
    closeBtn.addEventListener('click', closeLightbox);

    // Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  });
})();
