// 팝업 열기
function openPopup() {
  document.getElementById('reservePopup').style.display = 'flex';
}

// 팝업 닫기
function closePopup() {
  document.getElementById('reservePopup').style.display = 'none';
}

// 예약 완료 버튼 클릭 시
function submitReservation() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const agree = document.querySelector('.checkbox input').checked;
  const people = document.getElementById('peopleCount').innerText;

  if (!name || !date || !time || !agree) {
    alert('모든 항목을 입력하고 개인정보 수집에 동의해주세요.');
    return;
  }

  alert(`예약이 완료되었습니다.\n이름: ${name}\n날짜: ${date}\n시간: ${time}\n인원: ${people}명`);
  closePopup();
}

// 인원 수 조절
document.addEventListener('DOMContentLoaded', function () {
  let count = 1;
  const countElement = document.getElementById('peopleCount');
  const plusBtn = document.querySelector('.people-counter .plus');
  const minusBtn = document.querySelector('.people-counter .minus');

  if (countElement && plusBtn && minusBtn) {
    plusBtn.addEventListener('click', () => {
      count++;
      countElement.innerText = count;
    });

    minusBtn.addEventListener('click', () => {
      if (count > 1) {
        count--;
        countElement.innerText = count;
      }
    });
  }
});
