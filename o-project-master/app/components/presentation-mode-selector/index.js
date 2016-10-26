import React from 'react';
import Styles from './index.css';

export default function PresentationModeSelector({modes, onChange}) {
  const options = modes.map(mode => {
     return <option key={mode} value={mode}>{mode}</option>;
  });

  return (
    <select onChange={(option) => onChange(option.target.value)}>
        <option value=''>-</option>
        {options}
    </select>
  );
}