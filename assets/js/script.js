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

// 아닐로프로젝트

// .anilo6
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.aniloImg6');

    const observerOptions = {
        root: null, // 뷰포트를 기준으로 관찰
        rootMargin: '0px',
        threshold: 0.1 // 10%가 뷰포트에 들어오면 콜백 실행
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target); // 한 번만 애니메이션을 실행하기 위해 관찰 해제
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});

//

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rects = document.querySelectorAll('.rect');
                rects.forEach((rect, index) => {
                    setTimeout(() => {
                        rect.classList.add('show');
                    }, index * 100); // 100ms delay between each rect
                });
                observer.unobserve(entry.target); // Unobserve after animation
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(document.querySelector('.anilo17'));
});