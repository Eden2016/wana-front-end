import React from 'react';

const Button = (props) => {
  const { type, size, color, text } = props;
  let btnMarkup;
  if (type === 'solid') {
    btnMarkup = <button className={`btn btn--${color} btn--${size}`}>{text}</button>;
  } else if (type === 'outline') {
    btnMarkup = <button className={`btn btn--${color} btn--${size} btn--outline`}>{text}</button>;
  }
  return btnMarkup;
};

export default Button;
