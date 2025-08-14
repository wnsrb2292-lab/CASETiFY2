$(function () {
  $('#foot_menu > ul > li').click(function (e) {
    const $this = $(this);

    // 하위 ul이 있는 경우에만 작동
    if ($this.children('ul').length > 0) {
      e.stopPropagation(); // 이벤트 버블링 방지

      // 다른 열린 항목 닫기
      $('#foot_menu > ul > li').not($this).removeClass('active').children('ul').stop().slideUp(300);

      // 현재 클릭한 항목 토글
      if ($this.hasClass('active')) {
        $this.removeClass('active');
        $this.children('ul').stop().slideUp(300);
      } else {
        $this.addClass('active');
        $this.children('ul').stop().slideDown(300);
      }
    }
  });
});