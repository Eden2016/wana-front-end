import React from 'react';
import PropTypes from 'prop-types';

//import './_banner.scss';

const Banner = ({ heading, subheading, bgImgUrl, children, curve }) => {
  const head = <h1 className="heading heading--display">{ heading }</h1>
  const subhead = <h2 className="-fontSize-l">{ subheading }</h2>;
  const bgImg = bgImgUrl ? `url("${bgImgUrl}")` : 'none';
  const childMarkup = (
    <div className="margin--xl no--margin-lr no--margin-b">
      { children }
    </div>
  );
  return (
    <div className={"banner banner--l -align-center -reversed" + ( curve ? ' curve curve--b' : '' )} style={{ backgroundImage: bgImg }}>
      <div className="container wrapper">
          <div className="wrapper__inner">
              { heading ? head : null }
              { subheading ? subhead : null }
              { children ? childMarkup : null }
          </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  bgImgUrl: PropTypes.string
};

export default Banner;
