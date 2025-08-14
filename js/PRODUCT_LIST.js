$(function () {
  window.addEventListener('scroll', function () {
    const topMenu = document.getElementById('top_menu');
    const scrollY = window.scrollY;

    if (scrollY > 1) {
      topMenu.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
      topMenu.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
  });


  const selected = document.querySelector('.selected-option');
  const selectedText = document.querySelector('.selected-text');
  const optionList = document.querySelector('.option-list');
  const options = document.querySelectorAll('.option-list li');

  // select 클릭시 옵션 리스트 보이기
  selected.addEventListener('click', () => {
    const isVisible = optionList.style.display === 'block';
    optionList.style.display = isVisible ? 'none' : 'block';
  });

  // 옵션 클릭 시 선택값 변경
  options.forEach(option => {
    option.addEventListener('click', () => {
      const img = option.querySelector('img');
      const imgSrc = img.src;
      const text = option.textContent.trim();
      selectedText.innerHTML = `<img src="${imgSrc}" alt="${text}"> ${text}`;
      optionList.style.display = 'none';
    });
  });

  // 외부 클릭 시 옵션 리스트 닫기
  document.addEventListener('click', (e) => {
    if (!document.querySelector('.custom-select').contains(e.target)) {
      optionList.style.display = 'none';
    }
  });

  // product-card hover 시 이미지 변경
  $('.product-card').each(function () {
    const $img = $(this).find('.product-img');
    const originalSrc = $img.attr('src');
    const hoverSrc = originalSrc.replace(/(\.\w+)$/, '-2$1'); // 확장자 앞에 -2 추가

    $(this).on('mouseenter', function () {
      $img.attr('src', hoverSrc);
    });

    $(this).on('mouseleave', function () {
      $img.attr('src', originalSrc);
    });
  });
  
  $('.series-item').first().addClass('active');
  $('.product-grid').removeClass('active').hide();
  $('.product-grid').first().addClass('active').show();

  $('.series-item').on('click', function () {
    const index = $(this).index();

    // series-item active 토글
    $('.series-item').removeClass('active');
    $(this).addClass('active');

    // product-grid active 토글 및 표시
    $('.product-grid').removeClass('active').hide();
    $('.product-grid').eq(index).addClass('active').show();


  });

  

});
