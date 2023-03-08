import player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = "videoplayer-current-time";

 const onPlay = function({seconds}) {
  
   localStorage.setItem(currentTime, seconds);
 };
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(currentTime));

















































// function onStart({ seconds }) {
//   localStorage.setItem(currentTime, seconds);
// }
// player.setCurrentTime(localStorage.getItem(currentTime));