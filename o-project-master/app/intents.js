/* @flow */

import {ReplaySubject} from 'rx';
import Keys from './keys';

const intentSubject = new ReplaySubject(1);

function actionWithKey(key: string) {
  return function toIntentSubject(data: any) {
    intentSubject.onNext({key, data});
  };
}

export default {
  subject: intentSubject,
  changeRoute: actionWithKey(Keys.CHANGE_ROUTE),
  articleOpen: actionWithKey(Keys.ARTICLE_OPEN),
  changePresentationMode: actionWithKey(Keys.CHANGE_PRESENTATION_MODE)
};
