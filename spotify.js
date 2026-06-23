const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

let isPlaying = false;

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = "▶";
    } else {
        audio.play();
        playBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", () => {
    const percent =
        (audio.currentTime / audio.duration) * 100;
    progress.value = percent || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime =
        (progress.value / 100) * audio.duration;
});