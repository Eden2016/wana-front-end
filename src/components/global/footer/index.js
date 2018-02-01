import React from 'react';

const Footer = ({ curve }) => {
  return(
    <div>
      <footer className={"footer-landing section -bg-primary"+ ( curve ? ' curve curve--t' : '' )}>
        <div className="container">
          <div className="row">
            <div className="col col--6-of-10 col--am">
              <div className="row">
                <div className="col col--4-of-6">
                  <img src="/assets/img/logo-wana-footer.svg" alt="wana" className="footer-logo" />
                  <div className="margin--xxl no--margin-t no--margin-lr">
                    <p>Wana is a online application for families with children to network with other families to exchange free babysitting. Users connect with new contacts through groups, meetups, and profile searches, or invite known friends.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--4-of-10 col--am">
              <div className="row">
                <div className="col col--2-of-4">
                  <div className="margin--xxl no--margin-t no--margin-lr">
                    <p className="p-large">More Links</p>
                    <ul className="list">
                      <li className="item"><a href="">Blog</a></li>
                      <li className="item"><a href="">FAQ</a></li>
                      <li className="item"><a href="">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col col--2-of-4">
                  <div className="margin--xxl no--margin-t no--margin-lr">
                    <p className="p-large">Contact Us</p>
                    <ul className="list">
                      <li className="item">
                        <a href="#">feedback@wanafam.ly</a>
                      </li>
                      <li className="item">&nbsp;</li>
                      <li className="item">
                        <ul className="list list--inline">
                          <li className="item"><a href="https://www.facebook.com/wanafam.ly/" target="_blank"><img src="/assets/img/icons/facebook.svg" alt="facebook" /></a></li>
                          <li className="item"><a href="https://twitter.com/wanafam_ly" target="_blank"><img src="/assets/img/icons/twitter.svg" alt="twitter" /></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright -reversed">
        <div className="container wrapper">
          <div className="wrapper__inner">
            <p>&copy; Copyright 2017, Wana Family Network.</p>
          </div>
          <div className="wrapper__inner -align-right">
            <ul className="list list--inline list--divided -fontSize-xs">
              <li className="item"><a href="/terms">Terms of Use</a></li>
              <li className="item"><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
