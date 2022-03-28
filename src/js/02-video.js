import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function saveCurrentTimeToLocaleStorage(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle((saveCurrentTimeToLocaleStorage), 1000));

const getCurrentVideoTimeFromLocaleStorage = localStorage.getItem('videoplayer-current-time');

console.log(getCurrentVideoTimeFromLocaleStorage);


player.setCurrentTime(getCurrentVideoTimeFromLocaleStorage).then(function(seconds) {
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;

      default:
          break;
  }
});


