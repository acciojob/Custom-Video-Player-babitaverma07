// Selecting elements
const video = document.querySelector('.video__player');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('.volume');
const playbackSpeedInput = document.querySelector('.playbackSpeed');
const skipBackwardButton = document.querySelector('.skip-backward');
const skipForwardButton = document.querySelector('.skip-forward');

// Adding event listeners
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
playButton.addEventListener('click', togglePlay);
volumeInput.addEventListener('input', setVolume);
playbackSpeedInput.addEventListener('input', setPlaybackSpeed);
skipBackwardButton.addEventListener('click', skipBackward);
skipForwardButton.addEventListener('click', skipForward);

// Functions
function updateProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercent}%`;
}

function togglePlayButton() {
  playButton.textContent = video.paused ? '►' : '❚ ❚';
}

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function setVolume() {
  video.volume = volumeInput.value;
}

function setPlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

function skipBackward() {
  video.currentTime -= 10;
}

function skipForward() {
  video.currentTime += 25;
}