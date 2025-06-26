window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.marquee-track');
    const text = track.innerHTML;
    const repeatCount = 20; // 반복횟수 늘려서 자연스럽게 이어지게

    // 콘텐츠 여러 번 붙여서 길게 만들기
    let fullText = '';
    for (let i = 0; i < repeatCount; i++) {
      fullText += text;
    }
    track.innerHTML = fullText;

    // 애니메이션 실행
    let pos = 0;
    const speed = 1; // px 단위로 이동

    function scrollMarquee() {
      pos -= speed;
      if (Math.abs(pos) >= track.offsetWidth / 2) {
        pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(scrollMarquee);
    }

    scrollMarquee();
  });




