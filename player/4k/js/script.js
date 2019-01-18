var playTimestamp;

var conf = {
  key: '29ba4a30-8b5e-4336-a7dd-c94ff3b25f30',
  analytics: {
    key: '45adcf9b-8f7c-4e28-91c5-50ba3d442cd4',
    videoId: '4k'
  },
  events: {
    play: function(e) {
      playTimestamp = e.timestamp;
    },
    playing: function(e) {
      document.getElementById('startup').innerHTML = e.timestamp - playTimestamp + 'ms';
    }
  },
  playback: {
    muted: true
  }
};

var source = {
  hls: 'http://cdn.bitmovin.com/content/demos/4k/38e843e0-1998-11e9-8a92-c734cd79b4dc/manifest.m3u8',
  poster: 'https://bitmovin-a.akamaihd.net/content/sintel/poster.png'
};

var playerContainer = document.getElementById('player-container');
var player = new bitmovin.player.Player(playerContainer, conf);

function loadPlayer() {
  player.load(source).then(() => {
    player.setVideoQuality('1600_50128000');
  });
}

$(document).ready(function() {
  loadPlayer();
});
