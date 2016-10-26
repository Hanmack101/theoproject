import React from 'react';
import Styles from './index.css';

export default function ArticleListItem({article, onClick}) {
  return (
    <div className={Styles.default}>
      <button onClick={onClick} className={Styles.button}>{article.title}</button>
    </div>
  );
}
