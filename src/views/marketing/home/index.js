import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeValue, setSignUpData } from 'actions/login';
import Banner from 'components/wana-ui/banner';
import Icon from 'components/wana-ui/icon';
import NavMenu from 'components/global/navmenu';
import Footer from 'components/global/footer';
import SignUp from 'components/forms/SignUp';
import cookie from 'react-cookies';

const FamilySearchSplash = props => {
  return (
    <Banner
      heading='Find Families in Your Neighborhood'
      subheading='Use points to book a sitter for your kids, or a be a sitter and earn points for FREE!'
      bgImgUrl='../../assets/img/placeholder/banner-search.jpg'
      curve>

      <form action="/templates/search/results.php" method="get">
        <div className="row row--tight-gutter -align-left">
          <div className="col col--5-of-12 col--push-1-of-12 col--m-2-of-2">
            <div className="input input--text input--has-icon">
              <input type="text" className="input__field" placeholder="Search by name, neighborhood, group, etc..." />
              <label className="input__icon">
                <svg className="icon-search"><use xlinkHref="#icon-search"/></svg>
              </label>
            </div>
          </div>
          <div className="col col--3-of-12 col--m-2-of-2">
            <div className="input input--text input--has-icon">
              <input type="text" className="input__field" placeholder="City or Zip Code" defaultValue="Los Angeles, CA" />
              <label className="input__icon">
                <svg className="icon-location"><use xlinkHref="#icon-location"/></svg>
              </label>
            </div>
          </div>
          <div className="col col--2-of-12 col--m-2-of-2">
            <div className="input">
              <button type="submit" className="btn btn--primary btn--block btn--l">Search</button>
            </div>
          </div>
        </div>
      </form>

    </Banner>
  );
};

const HomeHowItWorks = props => {
  return (
    <section className="section how-it-works -bg-white">
      <div className="container center center--h">
        <h2 className="margin--xxxl no--margin-t no--margin-lr -fontWeight-3">How it works</h2>
        <div className="row">
          <div className="col col--3-of-12 col--m-2-of-4">
            <img src="/assets/img/graphic-1.svg" alt="" />
            <h4>Sign up for free</h4>
            <p className="p-small">Quickly sign up with your email or Facebook account and get connected with your real-world network automatically.</p>
          </div>
          <div className="col col--3-of-12 col--m-2-of-4">
            <img src="/assets/img/graphic-2.svg" alt="" />
            <h4>Exchange free babysitting</h4>
            <p className="p-small">Post your request on Wana when you need a sitter, and receive offers from your neighbors.</p>
          </div>
          <div className="col col--3-of-12 col--m-2-of-4">
            <img src="/assets/img/graphic-3.svg" alt="" />
            <h4>Gain points for each babysit</h4>
            <p className="p-small">Earn Wana points by babysitting for others, and use your points for your own babysitting needs.</p>
          </div>
          <div className="col col--3-of-12 col--m-2-of-4">
            <img src="/assets/img/graphic-4.svg" alt="" />
            <h4>Build your network</h4>
            <p className="p-small">Grow the community and share free babysitting with your trusted circle of friends, attend events to meet more friends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeHowItWorksDivider = props => {
  return (
    <div className="-bg-white">
      <div className="divider-slash center center--h"></div>
    </div>
  );
};

const HomeCta = props => {
  return (
    <section className="section -bg-white">
      <div className="row">
        <div className="col col--6-of-12 col--am">
          <div className="padding--xxl no--pad-tb no--pad-l">
            <img src="/assets/img/banner.png" alt="" className="img-fluid img-flush--l" />
          </div>
        </div>
        <div className="col col--6-of-12 col--am">
          <div className="title-group no--margin-b" style={{ maxWidth: 624 + 'px' }}>
            <h2 className="-fontWeight-3">Your trusted network of family babysitters in your neighborhood.</h2>
            <p>Network with other families to exchange free babysitting services.</p>
            <a href="#" className="btn btn--primary">Get started for free</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeTestimonials = props => {
  return (
    <section className="section curve curve--t curve--b -bg-light-gray">
      <div className="container">
        <div className="title-group title-group--center">
          <h2 className="-fontWeight-3">What some of our babysitters are saying</h2>
          <p>Join our rapidly growing community of sitters.</p>
        </div>
        <div className="row">
          <div className="testimonial col col--4-of-12">
            <div className="testimonial__card">
              <div className="testimonial__bubble">
                <p>“As a mother, I wanted to make sure Wana had a network of families I trusted. The experience has been amazing, I love developing a reliable network of sitters I could trust. I can now go on movie dates again with my hubby!"</p>
              </div>
              <div className="testimonial__user wrapper">
                <div className="user-profile wrapper__inner">
                  <img src="/assets/img/user-avatar-1.png" alt="Michelle" />
                </div>
                <div className="user-info wrapper__inner">
                  <p>Michelle Hammond <br />
                  <span className="user-title">Mother</span> • <span className="date-joined">Joined 20 days ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial col col--4-of-12">
            <div className="testimonial__card margin--xxxl no--margin-t no--margin-lr">
              <div className="testimonial__bubble">
                <p>“I wanted to make sure Wana had a network of families I trusted. The experience has been amazing, I love developing a reliable network of sitters I could trust. I can now go on movie dates again with my wifey!"</p>
              </div>
              <div className="testimonial__user wrapper">
                <div className="user-profile wrapper__inner">
                  <img src="/assets/img/user-avatar-2.png" alt="Michelle" />
                </div>
                <div className="user-info wrapper__inner">
                  <p>Luis Hernandez <br />
                  <span className="user-title">Father • </span><span className="date-joined">Joined 6 months ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial col col--4-of-12">
            <div className="testimonial__card">
              <div className="testimonial__bubble">
                <p>“As a mother, I wanted to make sure Wana had a network of families I trusted. The experience has been amazing, I love developing a reliable network of sitters I could trust. I can now go on movie dates again with my hubby!</p>
              </div>
              <div className="testimonial__user wrapper">
                <div className="user-profile wrapper__inner">
                  <img src="/assets/img/user-avatar-1.png" alt="Michelle" />
                </div>
                <div className="user-info wrapper__inner">
                  <p>Michelle Hammond <br />
                  <span className="user-title">Mother</span> • <span className="date-joined">Joined 20 days ago</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeLocations = props => {
  return (
    <section className="section featured-in -bg-white">
      <div className="container">
        <p className="center center--h">We’re proud to be featured in</p>
        <ul className="list list--inline">
          <li className="item"><img src="/assets/img/company-logo-1.jpg" alt="CNBC" /></li>
          <li className="item"><img src="/assets/img/company-logo-2.jpg" alt="FamilyFun" /></li>
          <li className="item"><img src="/assets/img/company-logo-3.jpg" alt="Good Housekeeping" /></li>
          <li className="item"><img src="/assets/img/company-logo-4.jpg" alt="Parents" /></li>
          <li className="item"><img src="/assets/img/company-logo-5.jpg" alt="Woman's Day" /></li>
        </ul>
      </div>
      <div className="-bg-white">
        <div className="divider-slash center center--h"></div>
      </div>
      <div className="section no--pad-b -bg-white">
        <div className="row">
          <div className="col col--6-of-12 col--am">
            <div className="title-group no--margin-b -float-right" style={{ maxWidth: 625 + 'px', paddingLeft: 24 + 'px' }}>
              <h2 className="-fontWeight-3">Our Neighborhoods</h2>
              <p style={{ lineHeight: 48 + 'px' }}>We’re currently serving in these Los Angeles areas: <br />
              • South Bay <br />
              • Westside</p>
            </div>
          </div>
          <div className="col col--6-of-12 col--am">
            <img src="/assets/img/locations-map.png" alt="" className="img-fluid img-flush--r" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeNews = props => {
  return (
    <section className="section curve curve--t curve--b -bg-light-gray">
      <div className="container">
        <div className="title-group title-group--center no--margin-b">
          <h2 className="-fontWeight-3">Latest news</h2>
        </div>
        <div className="post-container">
          <div className="post-item">
            <a href="#" className="post card">
              <div className="post__image">
                <img src="/assets/img/post-image-1.png" alt="" />
              </div>
              <div className="post__content">
                <span className="post-cat -color-primary">Trends &amp; Lifestyle</span>
                <h4>How Much Does it Cost to Pay a Babysitter in 2017?</h4>
                <p>August 05, 2017</p>
              </div>
            </a>
          </div>
          <div className="post-item">
            <a href="#" className="post card">
              <div className="post__image">
                <img src="/assets/img/post-image-2.png" alt="" />
              </div>
              <div className="post__content">
                <span className="post-cat -color-secondary">Success</span>
                <h4>The 10 Best Apps for Busy Moms</h4>
                <p>July 29, 2017</p>
              </div>
            </a>
          </div>
          <div className="post-item">
            <a href="#" className="post card">
              <div className="post__image">
                <img src="/assets/img/post-image-3.png" alt="" />
              </div>
              <div className="post__content">
                <span className="post-cat -color-tertiary">The Strategist</span>
                <h4>10 Ways to Find a Babysitter You trust</h4>
                <p>July 27, 2017</p>
              </div>
            </a>
          </div>
        </div>
        <div className="padding--xl no--pad-lr center center--h">
          <a href="#" className="btn btn--outline btn--primary">View all</a>
        </div>

        <div className="cta -reversed">
          <div className="cta__container">
            <div className="row">
              <div className="col col--4-of-9 col--am">
                <h3 className="-fontWeight-3">Stay updated with Wana news</h3>
                <p>A simple, monthly newsletter to keep up with Wana.</p>
              </div>
              <div className="col col--5-of-9 col--am">
                <form action="" className="wrapper">
                  <div className="input input--text wrapper__inner padding--xs no--pad-tb no--pad-l">
                    <input type="email" className="input__field" placeholder="Enter your email address"></input>
                  </div>
                  <div className="input wrapper__inner">
                    <button type="submit" className="btn btn--reversed btn--outline btn--block btn--l">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const HomeBottomCta = props => {
  return (
    <section className="section signup-cta -bg-white">
      <div className="container">
        <img src="/assets/img/family.png" alt="" />
        <div className="-bg-white">
          <div className="divider-slash center center--h"></div>
        </div>
        <div className="title-group title-group--center no--margin-b no--pad-b">
          <h2 className="-fontWeight-3">Sign up for Wana today!</h2>
          <p>Join us today and start exchanging free babysitting with your trusted circle of friends.</p>
          <a href="#" className="btn btn--l btn--primary">Get Started for Free</a>
        </div>
      </div>
    </section>
  );
};

@connect(state => ({

}))

class Home extends Component {

  constructor(props) {
    super(props);
  }

  setSignUpData = (signUpData) => {
    console.log("DATA: ", signUpData)
    const { dispatch, history } = this.props;
    dispatch(setSignUpData(signUpData));
    history.push('/signup_complete');

  }
  render() {
    const { props } = this;
    return (
      <div>
        <NavMenu
          history={this.props.history}
        />
        <FamilySearchSplash />
        <HomeHowItWorks />
        <HomeCta />
        <HomeTestimonials />
        <HomeLocations />
        <HomeNews />
        <HomeBottomCta />
        <Footer curve />
      </div>
    );
  }
};

export default Home;
