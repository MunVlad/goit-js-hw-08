import player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

 const onPlay = function({seconds}) {
  


 };
localStorage.setItem("videoplayer-current-time", 'fsdfdf'
);
console.log(localStorage);
player.on('timeupdate', throttle(onPlay, 1000));


















































// function onStart({ seconds }) {
//   localStorage.setItem(currentTime, seconds);
// }
// player.setCurrentTime(localStorage.getItem(currentTime));