import Route from './route';
import Articles from './articles';

export function get() {

  return Route.get()
              .merge(Articles.get())
              .scan( (state, reducer) => reducer(state));

}
