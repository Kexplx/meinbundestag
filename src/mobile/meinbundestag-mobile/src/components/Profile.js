import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import ProfileEntry from './ProfileEntry';
import { profile } from '../style/Profile';


class Profile extends React.PureComponent {
  getHeader() {
    const { imageUrl } = this.props;
    let source = { uri: imageUrl };
    if (imageUrl === undefined) {
      source = require('../../assets/icon.png'); // eslint-disable-line global-require
    }
    return (
      <View style={profile.header}>
        <View style={profile.headerImageView}>
          <Image
            style={profile.headerImage}
            source={source}
          />
        </View>
      </View>
    );
  }

  render() {
    const {
      name, party, gender, birthYear, state, education, profession,
      questions, speeches, committees,
    } = this.props;
    const header = this.getHeader();
    return (
      <View style={profile.container}>
        {header}
        <View style={profile.headerSeparator} />
        <View style={profile.body}>
          <ProfileEntry description="Name" value={name} />
          <ProfileEntry description="Partei" value={party} />
          <ProfileEntry description="Geburtsjahr" value={birthYear} />
          <ProfileEntry description="Geschlecht" value={gender} />
          <ProfileEntry description="Bundesland" value={state} />
          <ProfileEntry description="Abschluss" value={education} />
          <ProfileEntry description="Amt" value={profession} />
          <ProfileEntry description="Fragen" value={questions} />
          <ProfileEntry description="Reden" value={speeches} />
          <ProfileEntry description="Aussschüsse" value={committees} />
        </View>
      </View>
    );
  }
}

Profile.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  party: PropTypes.string,
  state: PropTypes.string,
  gender: PropTypes.string,
  birthYear: PropTypes.string,
  education: PropTypes.string,
  profession: PropTypes.string,
  questions: PropTypes.string,
  speeches: PropTypes.number,
  committees: PropTypes.number,
};

Profile.defaultProps = {
  imageUrl: undefined,
  name: 'keine Angabe',
  party: 'keine Angabe',
  state: 'keine Angabe',
  gender: 'keine Angabe',
  birthYear: 'keine Angabe',
  education: 'keine Angabe',
  profession: 'keine Angabe',
  questions: 'keine Angabe',
  speeches: 0,
  committees: 0,
};

export default Profile;
