import React from 'react';

const Icon = (props) => {
  const { icon, type, color, size, state } = props;
  let iconMarkup;
  let useTag = `<use xlink:href="#icon-${icon}"></use>`;
  if (type === 'box') {
    iconMarkup = <div className={`box-icon box-icon--${color}`}><svg className={`icon icon-${icon} -color-${color} icon--${size}`} dangerouslySetInnerHTML={{__html: useTag }}></svg></div>;
  } else {
    iconMarkup = <svg className={`icon icon-${icon} icon--${size} -${state}`} dangerouslySetInnerHTML={{__html: useTag }}></svg>;
  }
  return iconMarkup;
};

export default Icon;
