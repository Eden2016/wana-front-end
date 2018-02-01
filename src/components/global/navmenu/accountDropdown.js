import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import TinyDropdown from '../../wana-ui/dropdown/tiny-dropdown';

class AccountDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  }
  render() {
    const { auth } = this.props;
    const { userData } = auth || {};
    const { id, family, familyProfilePhoto, first_name, last_name } = userData || {};
    const familyId = family ? family.id ? family.id : false : false;
    const img = familyProfilePhoto ? `url('${familyProfilePhoto})` : '#5F70D0';
    const imageTintStr = `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 50, 0.5), rgba(0, 0, 85, 0.75))`
    const headerWelcomeStyles = { background: `${imageTintStr}, ${img}` };
    return (
      <div className="dropdown" onClick={this.toggleDropdown}>
        {this.props.children}
        <TinyDropdown className="account-dropdown" active={this.state.dropdownVisible} hideIcon={true}>
          <div className="account-dropdown-menu">
            <div className="account-dropdown-header" style={headerWelcomeStyles}>
              <div className="header-profile-btn">
                <Link to={familyId ? `/profile/${familyId}` : `/signup/complete`} className="btn btn--primary btn--block">View Profile</Link>
              </div>
              <p className="header-welcome">{`Welcome, ${first_name}!`}</p>
              <p>{`${first_name}'s Family`}</p>
            </div>
            <div className="account-dropdown-menu">
              <ul>
                <li><Link to="/connections">My Connections</Link></li>
                <li><Link to="/account/settings">Account Settings</Link></li>
                <li><Link to="/account/transactions">My Points Balance</Link></li>
                <li><Link to="/account/billing`">Payment Methods</Link></li>
                <li><Link to="/account/email-prefs">Email Preferences</Link></li>
                <li><Link to="/account/privacy-settings">Privacy Settings</Link></li>
                <li className="break"></li>
                <li onClick={this.props.logout} className="menu-signout">Sign Out</li>
              </ul>
            </div>
          </div>
        </TinyDropdown>
      </div>
    );
  }
}

export default AccountDropdown;
