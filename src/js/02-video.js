import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
let pausedTime = 0;
let resumeTime = 0;

const onPlay = function (data) {
    pausedTime = data.seconds;
    localStorage.setItem('videoplayer-current-time',pausedTime);
};

player.on('timeupdate', throttle(onPlay, 1000));


resumeTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(resumeTime)
    .then(function (seconds) {
        console.log('resumeTime', resumeTime);  
    })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
    });
