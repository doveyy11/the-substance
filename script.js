document.addEventListener("DOMContentLoaded", function() {
    const bgm = document.getElementById("bgm");
    const bgmBtn = document.getElementById("bgm-btn");

    bgmBtn.addEventListener("click", function() {
        if (bgm.paused) {
            bgm.play();
            bgmBtn.classList.add("playing");
            bgmBtn.textContent = "⏸ 停止音乐";
        } else {
            bgm.pause();
            bgmBtn.classList.remove("playing");
            bgmBtn.textContent = "🎵 播放音乐";
        }
    });
});
