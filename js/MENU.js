// menu.js
function openMenu() {
  document.getElementById('menu-overlay').style.display = 'block';
}

function closeMenu() {
  document.getElementById('menu-overlay').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  // menu.html 파일을 불러와서 삽입
  fetch('menu.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('menu-container').innerHTML = data;

      // 메뉴 버튼을 누르면 열림
      const menuBtn = document.querySelector('.menu_icon');
      if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openMenu();
        });
      }
    });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.close-btn')) {
      e.preventDefault();
      closeMenu();
    }
  });

  function openMenu() {
    document.getElementById('menu-overlay').style.display = 'block';
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    document.getElementById('menu-overlay').style.display = 'none';
    document.body.classList.remove('menu-open');
  }


});
