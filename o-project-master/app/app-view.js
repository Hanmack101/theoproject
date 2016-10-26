/* @flow weak */
import React from 'react';
import styles from './main.css';
import Intents from './intents';

import ArticleView from './views/article';
import ListView from './views/list';

const gotoRandom = () => Intents.changeRoute(Math.random());

export default function App(props) {
  const {
    route,
    articles,
    currentArticle
  } = props;
  


  const view = currentArticle ? 
    <ArticleView {...props}/> : <ListView {...props}/>; 

  return (
    <div>
      {view}
    </div>
  );
}
