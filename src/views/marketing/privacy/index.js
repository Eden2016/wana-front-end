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

@connect(state => ({

}))

class Privacy extends Component {

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

        <section className="section -bg-white cf">
          <div className="container body">

            <h1 className="heading">Our Privacy Policy&nbsp;</h1>
            <hr className="hairline"/>
            <p>Wana Family Network LLC (&ldquo;Wana&rdquo;) is committed to keeping any and all personal information collected of those individuals that visit our Site and use our Services accurate, confidential, secure, and private.</p>
            <p><strong>THEREFORE,</strong> this Privacy Policy Agreement shall apply to Wana Family Network LLC, and thus it shall govern any and all data collection and usage thereof. Through the use of <a href="http://wanafam.ly">http://wanafam.ly</a> you are herein consenting to the following data procedures expressed within this agreement. &nbsp;This Privacy Policy Agreement is effective as of October 23, 2017.</p>
            <h3>Collection Of Information</h3>
            <p>This Site collects various types of information, such as:</p>
            <ul className="list list--bulleted">
              <li className="item">Voluntarily provided information which may include your name, address, email address, billing and/or credit card information etc., which may be used when you purchase products and/or services and to deliver the services you have requested.</li>
              <li className="item">Information automatically collected when visiting our website, which may include cookies, third party tracking technologies, and server logs.</li>
            </ul>
            <p>The Wana Site shall only collect personal information that you knowingly and willingly provide through surveys, membership forms, or some profile content. It is the intent of this Site to use personal information only for the purpose for which it was requested and any additional uses specifically provided on this Site.</p>
            <p>Wana may have the occasion to collect anonymous demographic information, such as age, gender, household income, political affiliation, race, and religion at a later time. &nbsp;We may also gather information about the type of browser you are using, IP address, or type of operating system to assist us in providing and maintaining quality service.</p>
            <h3>Use Of Information Collected</h3>
            <p>Wana Family Network LLC may collect and may make use of personal information to assist in the operation of our Site and to ensure delivery of the Services you need and request. At times, we may find it necessary to use personally identifiable information as a means to keep you informed of other possible products and/or services that may be available to you from <a href="http://wanafam.ly">http://wanafam.ly</a>. Wana may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current or potential future services that may be offered.</p>
            <p>Wana does not now, nor will it in the future, sell, rent, or lease any of our customer lists and/or names to any third parties.</p>
            <p>Wana may find it beneficial to share specific data with our trusted partners in an effort to conduct statistical analysis, provide you with email and/or postal mail, deliver support and/or arrange for deliveries to be made. Those third parties shall be strictly prohibited from making use of your personal information, other than to deliver those services which you requested, and as such they are thus required, in accordance with this agreement, to maintain the strictest of confidentiality with regards to all your information.</p>
            <p>Wana may deem it necessary to follow websites and/or pages that our users may frequent in an effort to gleam what types of services and/or products may be the most popular to customers or the general public.</p>
            <p>Wana may disclose your personal information, without prior notice to you, only if required to do so in accordance with applicable laws and/or in a good faith belief that such action is deemed necessary or is required in an effort to:</p>
            <ul className="list list--bulleted">
              <li className="item">Remain in conformance with any decrees, laws, and/or statutes or in an effort to comply with any process which may be served upon Wana Family Network LLC and/or our Site;</li>
              <li className="item">Maintain, safeguard and/or preserve all the rights and/or property of Wana Family Network LLC; and</li>
              <li className="item">Perform under demanding conditions in an effort to safeguard the personal safety of users of Wana and/or the general public.</li>
            </ul>
            <h3>Exclusions</h3>
            <p>This Privacy Policy shall not apply to information posted to public areas of the Site, including, but not limited to, reviews, comments, media posts, or your public profile, nor unsolicited communications or submissions made directly to Wana through the Site, email, or other means, including, but not limited to, suggestions for future product upgrades. All such information shall be deemed to be non-confidential and Wana shall be free to reproduce, use, disclose, and distribute such information to others without limitation or attribution.</p>
            <h3>Cookies</h3>
            <p>The Wana Site may use cookies to provide additional functionality to the Services and help us analyze our Services usage more accurately. In all cases in which we use cookies, we will not collect personal information except with your permission.</p>
            <h3>Third Party Payment Processor</h3>
            <p>We use a third party payment processor to process payments made to us. In connection with the processing of such payments, we do not retain any personally identifiable information or any financial information such as credit card numbers. All such information is provided directly and only to our third party processor, Stripe, whose use of your personal information is governed by their privacy policy at <a href="https://stripe.com/us/privacy">https://stripe.com/us/privacy</a>.</p>
            <h3>Children Under Age Of 18</h3>
            <p>Wana Family Network LLC does not knowingly collect personal identifiable information from children under the age of eighteen (18). If it is determined that such information has been inadvertently collected on anyone under the age of eighteen (18), we shall immediately take the necessary steps to ensure that such information is deleted from our system's database.</p>
            <h3>Unsubscribe or Opt-Out</h3>
            <p>All users and/or visitors to our website have the option to discontinue receiving communication from us and/or reserve the right to discontinue receiving communications by way of email or newsletters. To discontinue or unsubscribe to our website please send an email that you wish to unsubscribe to help@wanafam.ly. If you wish to unsubscribe or opt-out from any third party websites, you must go to that specific website to unsubscribe and/or opt-out.</p>
            <h3>Links To Other Web Sites</h3>
            <p>Our website does contain links to affiliate and other websites. Wana does not claim nor accept responsibility for any privacy policies, practices, and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of each and every website that collects personally identifiable information. The aforementioned Privacy Policy Agreement applies only and solely to the information collected by our Site.</p>
            <h3>Security</h3>
            <p>Wana Family Network LLC shall endeavor and shall take every precaution to maintain adequate physical, procedural, and technical security with respect to our offices and information storage facilities so as to prevent any loss, misuse, unauthorized access, disclosure, or modification of the user's personal information under our control.</p>
            <p>The company also uses Secure Socket Layer (SSL) for authentication and private communications in an effort to build users' trust and confidence in the internet and website use by providing simple and secure access and communication of all personal information. &nbsp;In addition, Wana Family Network LLC is a licensee of TRUSTe. The website is also secured by VeriSign.</p>
            <h3>Changes To Privacy Policy Agreement</h3>
            <p>Wana Family Network LLC reserves the right to update and/or change the terms of our Privacy Policy, and as such we will post those change to our Site at <a href="http://wanafam.ly/privacy">http://wanafam.ly/privacy</a>, so that our users are always aware of the type of information we collect, how it will be used, and under what circumstances, if any, we may disclose such information. If at any point in time Wana decides to make use of any personally identifiable information on file, in a manner vastly different from that which was stated when this information was initially collected, the user or users shall be promptly notified by email. Users at that time shall have the option as to whether or not to permit the use of their information in this separate manner.</p>
            <h3>Acceptance Of Terms</h3>
            <p>Through the use of this Site, you are hereby accepting the terms and conditions stipulated within the aforementioned Privacy Policy Agreement. If you are not in agreement with our terms and conditions, then you should refrain from further use of our Site. In addition, your continued use of our website following the posting of any updates or changes to our terms and conditions shall mean that you are in agreement and acceptance of such changes.</p>
            <h3>How To Contact Us</h3>
            <p>If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email, telephone number or mailing address.</p>
            <p>Wana Family Network LLC<br />3371 Glendale Blvd. #142<br />Los Angeles, California 90039</p>
            <p>(747) 231-0567<br /><a href="mailto:help@wanafam.ly">help@wanafam.ly</a></p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
};

export default Privacy;
