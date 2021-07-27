const modalOverlay = document.querySelector('.modal__overlay');
const items = document.querySelectorAll('.item');

for (let item of items) {
  console.log(item.id);
  item.addEventListener("click", function() {
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('.modal__media').src = `https://www.youtube.com.br/embed/${item.id}`;
  });
}

document.querySelector('.modal__close').addEventListener("click", function() {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('.modal__media').src = '';
});