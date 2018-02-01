import React, { Component } from 'react';
import Slider from 'react-slick';

import Card from 'components/wana-ui/FamilyCard/FamilyCard';

class ConnectionsSlider extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 500)
  }

  getKidsAmount = (members) => {
    return members.filter(member => member.role === 2).length;
  }

  getAdults = (members) => {
    return members
      .filter(member => member.role !== 2)
      .map(member => ({ name: `${member.first_name} ${member.last_name}`, img: member.avatar }));
  }

  getKids = (members) => {
    return members
      .filter(member => member.role === 2)
      .map(member => ({ name: `${member.first_name} ${member.last_name}`, img: member.avatar }));
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    var mediumSetting= {
      ...settings,
      slidesToShow: 2,
    }
    var smallerSetting= {
      ...settings,
      slidesToShow: 1,
    }
    const { connections } = this.props;

    return (
      <Slider {...settings} responsive={[{ breakpoint: 766, settings: {...mediumSetting} }, { breakpoint: 535, settings: {...smallerSetting} }]}>
        {
          connections.map((connection, i) =>
            <div key={`connection-slider-${i}`}>
              <Card
                href={`/profile/${connection.id}`}
                title={`${connection.name} Family`}
                subTitle={`${this.getKidsAmount(connection.family_members)} Kids  •  Mar Vista`}
                fbText={connection.fb ? `You and ${connection.name} are friends on Facebook` : `You and ${connection.name} are not friends on Facebook`}
                backgroundImage={connection.avatar}
                adults={this.getAdults(connection.family_members)}
                children={this.getKids(connection.family_members)}
              />
            </div>
          )
        }
      </Slider>
    )
  }
}

export default ConnectionsSlider;
