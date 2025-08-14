$(function () {
  // 스크롤 시 배경색 변화
  window.addEventListener('scroll', function () {
    const topMenu = document.getElementById('top_menu');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      topMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    } else {
      topMenu.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
  });

  // 배너 자동 슬라이드
  const bannerImg = document.querySelector("#top_banner_img ul");
  const dots = document.querySelectorAll("#dot li");
  const totalSlides = dots.length;
  let current = 0;
  let interval;

  function showSlide(index) {
    bannerImg.style.transform = `translateX(-${index * 20}%)`;
    dots.forEach((dot, i) => {
      const img = dot.querySelector("img");
      img.src = i === index ? "images/ICON/dot1_over.png" : "images/ICON/dot1.png";
      dot.classList.toggle("selected", i === index);
    });
    current = index;
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      const next = (current + 1) % totalSlides;
      showSlide(next);
    }, 4000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(index);
      startAutoSlide();
    });
  });

  showSlide(0);
  startAutoSlide();

  // 탭 기능 (FMC_sel + case-panel 전환)
  const tabs = document.querySelectorAll('#FMC_nav ul li');
  const panels = document.querySelectorAll('.case-panel');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // 탭 색상 클래스
      tabs.forEach(t => t.classList.remove('FMC_sel'));
      tab.classList.add('FMC_sel');

      // 콘텐츠 패널 전환
      panels.forEach(p => p.classList.remove('active'));
      panels[index].classList.add('active');
    });
  });

});
