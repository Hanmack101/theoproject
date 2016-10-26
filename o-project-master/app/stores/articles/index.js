import {Observable} from 'rx';
import PouchDB from 'pouchdb';
import Intents from '../../intents';
import Keys from '../../keys';
import PresentationTypes from '../../utils/presentation-types'

const key = 'wassilincedstbaphingendo';
const password = 'e60c46261df57861fe42f3837c4d0a318d427c0a';

const db = new PouchDB(`http://${key}:${password}@o-project.cloudant.com/o-project`);

const {assign} = Object;

function findCurrentArticle(articles, id) {
  return articles.find( article => article._id === id );
}

function changePresentationModeIntents() {
  return Intents.subject.filter(intent => {
      return intent.key === Keys.CHANGE_PRESENTATION_MODE;
    })
    .pluck('data')
    .map(mode => state => assign(
      {},
      state,
      {currentMode: mode}
      )
    );
}

function openArticleIntents() {
  return Intents.subject.filter(intent => {
      return intent.key === Keys.ARTICLE_OPEN;
    })
    .pluck('data')
    .map(id => state => assign(
      {},
      state,
      {currentArticle: findCurrentArticle(state.articles, id)}
      )
    );
}

function retrieveArticles(){
  const allDocs = Observable.create(obs => {
                      db.allDocs({include_docs: true})
                        .then(res => obs.onNext(res))
                        .catch(console.error.bind(console));
                  })

  return allDocs
            .map(res => {
              return res.rows.map(({doc}) => doc);
            })
            .map(articles => state => assign(
              {},
              state,
              {articles, presentationTypes: PresentationTypes(articles)}
              )
            );
}

export default {
  get() {
    const articles = retrieveArticles();

    return articles.merge(openArticleIntents()).merge(changePresentationModeIntents());
  }
};
