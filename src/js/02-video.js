import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const CURRENT_TIME = "videoplayer-current-time";

 const onPlay = ({seconds}) => {
  
   localStorage.setItem(CURRENT_TIME, seconds);
 };

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);


















































// function onStart({ seconds }) {
//   localStorage.setItem(currentTime, seconds);
// }
// player.setCurrentTime(localStorage.getItem(currentTime));