let unos = document.getElementById('input');
let popup = document.getElementById('popup');
popup.style.display = 'none';

function provera() {
  if (unos.value === '129600') {
    popup.style.display = 'block';
  }
}
