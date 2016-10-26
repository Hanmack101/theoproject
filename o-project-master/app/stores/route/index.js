/* @flow */

import {
  Observable
} from 'rx';

import Intents from '../../intents';
import Keys from '../../keys';

type Routes = {
  route: string
}

const startingRoute = 'initialised';
const {assign} = Object;

export default {
  get() {
    const changeRouteIntents = Intents
        .subject
        .filter( ({key}) => key === Keys.CHANGE_ROUTE );

    return Observable
      .just( startingRoute )
      .concat( changeRouteIntents.pluck('data') )
      .distinctUntilChanged( x => x )
      .map( route => state => assign({}, state, {route}));
  }
};
