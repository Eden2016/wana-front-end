import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputFormField from '../../components/wana-ui/input';
import { Accordion, AccordionItem } from '../../components/wana-ui/accordion';
import UserDataForm from '../../components/forms/user-data';
import FamilyDataForm from '../../components/forms/family-data';
import { FindFriendsForm } from '../../components/forms/find-friends';
import { getUserData } from '../../api/auth';
import { validateProfile } from '../../utils/validators';
import { actions } from 'react-redux-form';

const completedUserForm = (props) => {
  return (<h1>hi</h1>)
}

@connect(state => ({
  userData: state.auth.userData,
  signupType: state.login.get('signupType'),
  signupForm: state.app.get('signupCompletedFormData')
}))

class SignupComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccordion: 1,
      stepComplete1: false,
      stepComplete2: false,
      stepComplete3: false,
      stepComplete4: false
    };
    this.navToStep = this.navToStep.bind(this);
    this.setComplete = this.setComplete.bind(this);
  }
  async componentWillMount() {
    // load profile
    const userData = await getUserData();
     // validate profile
    const profileValidity = validateProfile(userData, { returnFull: true });
    console.log('signupComplete will mount. userData:', userData, 'profile validity:', profileValidity);
    // dispatch action to preload forms
    const { avatar, first_name, last_name, phone1, phone2, birth_date, family } = userData || {};
    const signupModel = {
      first_name,
      last_name,
      birth_date,
      phone1,
      phone2,
      avatar
      // TODO - finding this in the current API response is weird. fix later?
      //activities: 'lol',
      //parenting_styles: 'lol',
      //role: 'lol'
    };
    this.props.dispatch(actions.load('signup', signupModel));
  }
  navToStep(step, opts) {
    const { firstStep, markPrevAsComplete } = opts || {};
    let navClear = false;
    console.log('navToStep called. At step ', this.state.activeAccordion, '. Now going to step ', step);
    const desiredStep = step
    const prevStep = step <= 1 ? 1 : desiredStep - 1;
    console.log('prevStep:', prevStep)
    console.log('state', this.state)
    if (firstStep && markPrevAsComplete) {
      this.setState({ activeAccordion: step, stepComplete1: true });
    } else {
      if (this.state[`stepComplete${prevStep}`]) {
        console.log('previous step was completed! Fire away')
        if (markPrevAsComplete) {
          this.setState({ activeAccordion: step, [`stepComplete${prevStep}`]: true });
        } else {
          this.setState({ activeAccordion: step });
        }
      } else {
         console.log('previous step not complete!');
      }
    }

    // this.setState({ activeAccordion: step });
    // for (var i = 1; i < step; i++) {
    //   console.log('forloop ', i, step)
    //   const stateKey = `stepComplete${i}`;
    //   if (this.state[stateKey] && i === step) {
    //     console.log('navToStep called. At step ', this.state.activeAccordion, '. Now going to step ', step, stateKey);
    //     navClear = true;
    //     break;
    //   } else {
    //     console.log('navToStep stopped, current step needs completion first', stateKey);
    //   }
    // }

    //if (navClear) this.setState({ activeAccordion: step });

  }
  setComplete(step) {
    console.log('setting ', step, ' to completed');
    this.setState({ [step]: true });
  }
  render() {
    const { signupType, signupForm } = this.props;
    const { stepComplete1, stepComplete2, stepComplete3, stepComplete4 } = this.state;
    const { first_name, last_name, birth_date, phone1, phone2, role } = signupForm || {};
    const step1CompleteMarkup = (
      <div className="item__summary well no--pad">
        <div className="well__row">
            <div className="well__section is-halved">
                <div className="tg tg--s">
                    <span className="tg__sub">First Name</span>
                    <span className="tg__title">{first_name}</span>
                </div>
            </div>
            <div className="well__section is-halved">
                <div className="tg tg--s">
                    <span className="tg__sub">Last Name</span>
                    <span className="tg__title">{last_name}</span>
                </div>
            </div>
        </div>
        <div className="well__row">
            <div className="well__section is-halved">
                <div className="tg tg--s">
                    <span className="tg__sub">DOB</span>
                    <span className="tg__title">{birth_date}</span>
                </div>
            </div>
            <div className="well__section is-halved">
                <div className="tg tg--s">
                    <span className="tg__sub">Role</span>
                    <span className="tg__title">{role ? role.label : ''}</span>
                </div>
            </div>
        </div>
        <div className="well__row">
            <div className="well__section is-halved">
                <div className="tg tg--s">
                    <span className="tg__sub">Primary Phone</span>
                    <span className="tg__title">{phone1}</span>
                </div>
            </div>
            <div className="well__section is-halved">
                <div className="tg tg--s">
                    <span className="tg__sub">Secondary Phone</span>
                    <span className="tg__title">{phone2}</span>
                </div>
            </div>
        </div>
      </div>
    );
    return (
      <div>
        <div id="fb-root"></div>

        <section className="content__section -bg-light-gray">
          <div className="section__head banner banner--empty -align-center padding--xl -reversed">
            <h1 className="heading -fontSize-xx margin--s no--margin-t no--margin-lr">Complete Your Registration</h1>
            <h2 className="-fontSize-l ">Tell us a little about you and your family to complete account creation.</h2>
          </div>
          <div className="container container--m">
            <Accordion active={this.state.activeAccordion}>
              <AccordionItem
                number={1}
                complete={stepComplete1}
                completeMarkup={step1CompleteMarkup}
                navToStep={this.navToStep}
                onComplete={() => { this.setComplete('stepComplete1'); this.navToStep(2, { override: true }); }}
                title="Your Information"
                titleLink="Make Changes"
                titleLinkUrl="#">
                <UserDataForm />
              </AccordionItem>
              <AccordionItem
                number={2}
                complete={stepComplete2}
                navToStep={this.navToStep}
                onComplete={() => { this.setComplete('stepComplete2'); this.navToStep(3, { override: true }); }}
                title="Your Family"
                titleLink="Make Changes"
                titleLinkUrl="#">
                <FamilyDataForm />
              </AccordionItem>
              {
                signupType === 'email' ? (
                  <AccordionItem
                    number={3}
                    complete={stepComplete3}
                    navToStep={this.navToStep}
                    onComplete={() => this.setComplete('stepComplete3')}
                    title="Find Friends"
                    titleLink="Make Changes"
                    titleLinkUrl="#">
                  <FindFriendsForm />
                </AccordionItem>
                ) : null
              }
              <AccordionItem
                number={signupType === 'email' ? 4 : 3}
                onComplete={() => {
                  const step = signupType === 'email' ? 'stepComplete4' : 'stepComplete3'
                  this.setComplete(step)
                }}
                complete={signupType === 'email' ? stepComplete4 : stepComplete3}
                navToStep={this.navToStep}
                title="Start Wana-ing!"
                titleLink=""
                titleLinkUrl="">
                  <StartWanaLoader
                    number={signupType === 'email' ? 4 : 3}
                    history={this.props.history}
                    stepActive={this.state.activeAccordion} />
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    );
  }
}

export default SignupComplete;


class StartWanaLoader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { history, active } = this.props;
    if (active) {
      console.log('active propn detected, navigating to thanks')
      setTimeout(function(){
        history.push('/signup/thanks');
      }, 2500);
    }
    return (
      <div className="well -align-center">
        <ul className="list list--inline list--padded">
          <li className="item">
            <img src="../../assets/img/load-spin.svg" width="64" alt=""/>
          </li>
          <li className="item">
            <div className="tg tg--l">
              <span className="tg__title -fontSize-l">We're building your awesome new profile!</span>
              <span className="tg__sub">You'll be on your way to FREE babysitting in just a second. ☺️</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
