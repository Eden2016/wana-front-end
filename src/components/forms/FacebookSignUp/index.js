import React from 'react';

const Account = (props) => {
  return (
    <div>
      <div class="content__section">
        <div class="section__content">
          <div class="container container--s">
            <div class="-align-center" style={{ position:'relative', zIndex:1 }}>
              <label class="avatar avatar--xl avatar--edit" style={{ backgroundImage:"url('/assets/img/placeholder/avatar-michelle.png')"}}>
                <input type="file" />
              </label>
            </div>
            <div class="card card--shadow" style={{ marginTop:'-60px', paddingTop:'60px' }}>
              <div class="card__body card__body--row">
                <label class="input input--text">
                  <span class="label">Email Address</span>
                  <input type="email" class="input__field" value="michelle.hammond@gmail.com" placeholder="you@youremail.com" required />
                </label>
              </div>
              <div class="card__body card__body--row">
                <label class="input input--text">
                  <span class="label">Change Password</span>
                  <input type="password" class="input__field" placeholder="Current Password" />
                </label>
                <label class="input input--text">
                  <input type="password" class="input__field" placeholder="New Password" />
                  <small>Passwords must be at least 8 characters and are case sensitive.</small>
                </label>
              </div>
              <div class="card__body card__body--row">
                <label class="input input--button">
                  <span class="label">Connect with Facebook</span>
                  <button class="btn btn--primary btn--block">CONTINUE WITH FACEBOOK</button>
                  <small>Connect your Facebook account to easily find your friends on Wana!</small>
                </label>
              </div>
            </div>
            <div class="well -border-none no--pad wrapper margin--m no--margin-b no--margin-lr">
              <div class="wrapper__inner -align-right">
                <ul class="list list--inline">
                  <li class="item">
                    <button class="btn btn--link btn--s">Discard</button>
                  </li>
                  <li class="item">
                    <button class="btn btn--primary btn--s">Save Changes</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
