// Public starter configuration. Edit this file, then run this project's install.sh.
// App ids are generated from the apps installed on your TV by sync-apps.py.
window.CONFIG = {
  // Apps pinned to the dock row at the bottom, in this order. Missing apps are skipped.
  dockApps: ['netflix', 'amazon', 'youtube.leanback.v4'],

  // Apps never shown as tiles (inputs and Live TV are already in the Inputs menu).
  hiddenApps: [
    'com.alex.glassos',
    'com.webos.app.livetv',
    'com.webos.app.hdmi1', 'com.webos.app.hdmi2', 'com.webos.app.hdmi3', 'com.webos.app.hdmi4'
  ],

  // The Live TV app, offered at the end of the Inputs menu. Leave empty to omit.
  liveTvApp: 'com.webos.app.livetv',

  // AirPlay receiver, offered at the end of the Inputs menu. Leave empty to omit.
  airPlayApp: 'airplay',

  // Tiles per row in the grid; the dock always has this many slots.
  columns: 4,

  // Set your own coordinates to enable weather. No location is configured by default.
  weatherLocation: null
};
