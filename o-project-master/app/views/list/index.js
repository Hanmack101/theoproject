import React from 'react';

import Intents from '../../intents';
import Keys from '../../keys';
import ArticleListItem from '../../components/article-list-item';
import PresentationModeSelector from '../../components/presentation-mode-selector'

export default function ArticleView(props) {
  const articles = props.articles || [];
  const modes = props.presentationTypes || [];

  const articleComponents = articles
                              .filter(article => {
                                return props.currentMode ? article.presentation === props.currentMode : true;
                              })
                              .map(article => {
                                  return <ArticleListItem 
                                            onClick={() => Intents.articleOpen(article._id)} 
                                            key={article._id} 
                                            article={article}
                                        />;
                              });

  return (
    <div>
      <div>
        <PresentationModeSelector 
          modes={modes} 
          onChange={mode => Intents.changePresentationMode(mode)}
        />
      </div>
      <div>
        {articleComponents}
      </div>
    </div>
  );
}
