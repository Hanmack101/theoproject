import win from './window';
import log from './log';

export function isDevMode() {
  return win.location.hash === '#development';
}

export default function devTools(appStateUpdates) {
  if (isDevMode()) {
    appStateUpdates.subscribe( appState => { win.__appState = appState; } );
    appStateUpdates.subscribe( appState => { log(appState); } );
  }
}
