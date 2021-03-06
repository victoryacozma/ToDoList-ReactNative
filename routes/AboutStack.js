import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About'
    },
  },
}

const AboutStack = createStackNavigator(screens);

export default AboutStack;