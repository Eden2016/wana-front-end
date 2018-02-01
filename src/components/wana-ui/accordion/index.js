import React from 'react';

export const AccordionItem = ({ number, children, title, titleLink, titleLinkUrl, active, complete, navToStep, onComplete, completeMarkup }) => {
  const childrenWithProps = React.Children.map(
    children,
    child => React.cloneElement(child, { navToStep, onComplete, complete, active })
  );
  const completeClassName = complete && !active ? 'is--complete ' : '';
  const activeClassName = active ? 'is--active ' : '';
  const itemClassName = 'item ' + activeClassName + completeClassName;

  return (
    <div className={itemClassName}>

      <div onClick={() => navToStep(number)} style={{cursor: "pointer"}} className="item__number">
        <span>{ number }</span>
      </div>
      <div className="item__content">
        <h3 onClick={() => navToStep(number)} style={{cursor: "pointer"}} className="item__title">
          {title}
          <a className="item__title-link" href={titleLinkUrl}>{titleLink}</a>
        </h3>

        <div className="item__content--inner">
          { childrenWithProps }
        </div>
        { complete && completeMarkup ? completeMarkup : null }
      </div>
    </div>
  );
};

export const Accordion = ({ active, children }) => {
  let mappedChildren = [];
  children.map((child, i) => {
    let mappedChild;
    if (active && active === i + 1 ) {
      mappedChild = React.cloneElement(child, { active: true, key: i });
    } else {
      mappedChild = child;
    }
    mappedChildren.push(mappedChild)
  });
  return (
    <div className="accordion accordion--stepped">
      { mappedChildren }
    </div>
  );
};
