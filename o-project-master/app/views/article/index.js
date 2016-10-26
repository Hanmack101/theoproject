import React from 'react';

import Intents from '../../intents';
import Keys from '../../keys';
import PageViewer from '../../components/page-viewer';

function backToList() {
  Intents.articleOpen(null);
}

import Styles from './index.css';

export default function ArticleView(props) {
  return (
    <div className={Styles.default}>
      <div className={Styles.topBar}>
        <div className={Styles.topBarLeft}>
          <button onClick={backToList}>{'<'}</button>
        </div>
        <div className={Styles.topBarRight}>
          <div>{props.currentArticle.title}</div>
        </div>
      </div>
      <div className={Styles.content}>
      <PageViewer url={props.currentArticle.contentUrl}/>
      </div>
    </div>
  );
}
