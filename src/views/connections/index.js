import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import NavMenu from 'components/global/navmenu';
import Icon from 'components/wana-ui/icon';
import Button from 'components/forms/Button/Button';
import ConnectionBlock from './components/connection-block';
import ConnectionsSlider from './components/connections-slider';

import { getPast, getFavorites, getFacebook } from '../../api/connections';

class Connections extends Component {
  render() {
    return (
      <div className="-bg-light-gray" style={{minHeight: 100 + '%'}}>

        <NavMenu/>

        <section className="app__body">
          <div className="content__section">

            <div className="section__head bar bar--l bar--panel -border-none">
              <div className="container wrapper">
                <div className="wrapper__inner">
                  <h1 className="-fontSize-l">My Connections</h1>
                </div>
                {/* <div className="wrapper__inner -align-right">
                  <button className="btn btn--primary btn--outline">Find Families</button>
                </div> */}
              </div>
            </div>

            <div className="container">

            {/* <div>
              <div className="-align-center">
                <Icon type="box" icon="family" color="primary" size="l"/>
                <h2 className="margin--s no--margin-lr no--margin-b">Whoops! You haven&#39;t connected with any families yet.</h2>
                <p className="-fontSize-m">Why not connect with some families in your neighborhood below?</p>
              </div>
              <hr className="divider"/>
              <ConnectionsSlider />
            </div> */}

              <ConnectionBlock href={'favorites'} title={'Favorites'} getConnections={getFavorites} />
              <ConnectionBlock href={'past'} title={'Past Connections'} getConnections={getPast} />
              <ConnectionBlock href={'facebook'} title={'Friends on Facebook'} getConnections={getFacebook} />

              <div className="well -align-center margin--xl no--margin-lr no--margin-b">
                <h3>Connect your Facebook account to instantly find families you know on Wana!</h3>
                <hr className="divider" />
                <FacebookLogin
                  appId="389649634784689"
                  autoLoad={false}
                  fields="name,email,picture"
                  cssClass="btn btn--l btn--facebook btn--block icon--left"
                  icon="fa-facebook-official"
                  textButton="Connect With Facebook"
                  callback={this.handleFacebook}
                  scope="public_profile"
                />
              </div>

            </div>

          </div>
        </section>

      </div>
    );
  }
};

export default Connections;
