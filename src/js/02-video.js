import player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

 const onPlay = function({duration, percent, seconds}) {
    {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
}
};

player.on('timeupdate', onPlay);


















































// function onStart({ seconds }) {
//   localStorage.setItem(currentTime, seconds);
// }
// player.setCurrentTime(localStorage.getItem(currentTime));