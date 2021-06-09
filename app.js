import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const buttonPlay = document.getElementById('play-pause')
const buttonMute = document.getElementById('mute-unmute')

const player = new MediaPlayer({ video, plugins: [ new AutoPlay(video) ] })
buttonPlay.onclick = () => player.tooglePlayPause()
buttonMute.onclick = () => player.toogleMuteUnmute()
