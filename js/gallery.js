// Gallery lightbox using delegated events so newly added/replaced gallery cards
// automatically work without needing extra JavaScript per image.
(() => {
  const galleryRoot = document.getElementById('galleryGrid');
  if (!galleryRoot) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Expanded gallery image');
  lightbox.innerHTML = `
    <div class="lightbox-panel">
      <button class="lightbox-close" type="button" aria-label="Close image">×</button>
      <img alt="Expanded gallery image">
      <div class="lightbox-caption"><h3></h3><p></p></div>
    </div>`;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('img');
  const lbTitle = lightbox.querySelector('.lightbox-caption h3');
  const lbDesc = lightbox.querySelector('.lightbox-caption p');

  function closeLightbox() {
    lightbox.classList.remove('open');
    lbImg.removeAttribute('src');
  }

  function openLightbox(img) {
    const figure = img.closest('figure');
    const caption = figure?.querySelector('figcaption');
    const title = caption?.querySelector('strong')?.textContent?.trim()
      || caption?.querySelector('b')?.textContent?.trim()
      || caption?.textContent?.trim()
      || img.alt
      || 'Gallery image';
    const description = caption?.querySelector('small')?.textContent?.trim()
      || caption?.querySelector('p')?.textContent?.trim()
      || '';

    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || title;
    lbTitle.textContent = title;
    lbDesc.textContent = description;
    lightbox.classList.add('open');
  }


  // Delegation: supports images/cards added later in gallery.html as well.
  galleryRoot.addEventListener('click', event => {
    const img = event.target.closest('img');
    if (!img || !galleryRoot.contains(img)) return;
    event.preventDefault();
    openLightbox(img);
  });


  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
})();
