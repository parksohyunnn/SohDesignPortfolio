// aside 다크모드 전환
document.getElementById('mode-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

//aside 날짜 및 시간 설정
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();

    // 날짜 업데이트
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', options);
    dateElement.textContent = currentDate;

    // 시간 업데이트
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `Seoul / ${hours}:${minutes}:${seconds}`;
    timeElement.textContent = currentTime;
}

// 최초 실행
updateDateTime();

// 1초마다 업데이트
setInterval(updateDateTime, 1000);



