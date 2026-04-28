
document.addEventListener('DOMContentLoaded', function() {

  // ----- FILTRO POR CATEGORÍAS -----
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const items = document.querySelectorAll('.item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      initModalButtons();
    });
  });

  // ----- MODAL -----
  const modal = document.getElementById('dishModal');
  const closeBtn = document.querySelector('.close-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalIngredients = document.getElementById('modal-ingredients');

  // Función para abrir el modal con datos de la tarjeta
  function openModal(dishCard) {

    const img = dishCard.querySelector('img');
    const titleElem = dishCard.querySelector('h3');
    const priceElem = dishCard.querySelector('p');

    if (!img || !titleElem || !priceElem) {
      console.error('Faltan elementos en la tarjeta', dishCard);
      return;
    }

    const imgSrc = img.src;
    const title = titleElem.innerText;
    const price = priceElem.innerText;
    let ingredients = dishCard.getAttribute('data-ingredients');
    if (!ingredients) ingredients = 'Información no disponible';

    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalPrice.innerText = price;
    modalIngredients.innerText = `🍽️ Ingredientes: ${ingredients}`;

    modal.style.display = 'flex';
  }


  function initModalButtons() {
    const detailBtns = document.querySelectorAll('.details-btn');
    detailBtns.forEach(btn => {
      // Eliminamos eventos anteriores para evitar duplicados
      btn.removeEventListener('click', btn._listener);
      const listener = (e) => {
        e.stopPropagation();
        const dishCard = btn.closest('.dish');
        if (dishCard) openModal(dishCard);
      };
      btn.addEventListener('click', listener);
      btn._listener = listener; 
    });
  }


  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  } else {
    console.error('No se encontró el botón .close-modal');
  }

 
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });


  initModalButtons();

}); 