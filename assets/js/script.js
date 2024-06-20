// aside 다크모드 전환
document.getElementById('mode-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});
