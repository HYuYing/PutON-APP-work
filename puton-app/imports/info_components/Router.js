import {  StackNavigator } from 'react-navigation'; // 1.0.0-beta.19
import camera from './Camera';




export default StackNavigator(
  {
    camera: { screen: camera },
  }
);