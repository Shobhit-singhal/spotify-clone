let suggested = document.querySelectorAll(".music-suggestion");
let songImgStatus = document.querySelector(".songImgStatus");
let statusTop = document.querySelector(".statusTop");
let statusBottom = document.querySelector(".statusBottom");
let song = document.querySelector("audio");
let progressBar = document.querySelector("#progressBar");
let volumeBar = document.querySelector("#volumeBar");
let current = document.querySelector(".current");
let totalDuration = document.querySelector(".totalDuration");
let playPause = document.querySelector("#playPause");
let muteUnmute = document.querySelector("#muteUnmute");
let playing = false;
let min;
let sec;
// song.src = "";
mute = false;

// totalDuration.innerHTML = song.duration;
// min = Math.floor(Math.floor(song.duration) / 60);
// sec = Math.floor(song.duration) - min * 60;
// totalDuration.innerHTML = `${min}:${sec.toString().padStart(2, 0)}`;
suggested.forEach((suggestion) => {
  suggestion.addEventListener("click", (e) => {
    console.log("clicked");
    //   console.log(e);
    // console.log(e.target);
    console.dir(e.target.closest(".suggestion"));
    console.log(e.target.closest(".suggestion"));
    let toPlay = e.target.closest(".suggestion");
    console.log(toPlay.querySelector("img"));
    let songImg = document.createElement("img");
    songImg.src = toPlay.querySelector("img").src;
    songImgStatus.innerHTML = "";
    songImgStatus.append(songImg);
    statusTop.innerHTML = toPlay.querySelector(".suggestion-name").innerHTML;
    statusBottom.innerHTML =
      toPlay.querySelector(".suggestion-bottom").innerHTML;
    song.currentTime = 0;
    song.src = "audio/audio.mp3";
    play();
  });
});
let a = 0;
let play = () => {
  if (song.src) {
    song.play();
    playing = true;
    playPause.classList.remove("fa-circle-play");

    playPause.classList.add("fa-circle-pause");
    // console.log(song.duration);
    setTimeout(() => {
      min = Math.floor(Math.floor(song.duration) / 60);
      sec = Math.floor(song.duration) - min * 60;
      totalDuration.innerHTML = `${min}:${sec.toString().padStart(2, 0)}`;
    }, 300);

    setInterval(() => {
      progressBar.value = (song.currentTime / song.duration) * 100;
      min = Math.floor(Math.floor(song.currentTime) / 60);
      sec = Math.floor(song.currentTime) - min * 60;
      current.innerHTML = `${min}:${sec.toString().padStart(2, 0)}`;
    }, 1000);
  }
};

playPause.addEventListener("click", () => {
  if (playing == false) {
    play();
  } else {
    song.pause();
    playing = false;
    playPause.classList.remove("fa-circle-pause");
    playPause.classList.add("fa-circle-play");
  }
});
progressBar.addEventListener("input", () => {
  song.currentTime = (progressBar.value * song.duration) / 100;
  play();
});

let volumeChange = () => {
  song.volume = volumeBar.value / 100;
  if (volumeBar.value == 0) {
    muteUnmute.classList.remove("fa-volume-high");
    muteUnmute.classList.add("fa-volume-xmark");
  } else {
    if (muteUnmute.classList.contains("fa-volume-xmark")) {
      muteUnmute.classList.add("fa-volume-high");
      muteUnmute.classList.remove("fa-volume-xmark");
    }
  }
};
muteUnmute.addEventListener("click", () => {
  console.log("mute ");
  volumeBar.value = 0;

  volumeChange();
});

song.volume = volumeBar.value / 100;
volumeBar.addEventListener("input", volumeChange);
