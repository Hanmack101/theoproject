import React from 'react';
import Styles from './index.css';


export default function PageViewer({url}) {
  return (
    <iframe className={Styles.default} src={url}/>
  );
}
