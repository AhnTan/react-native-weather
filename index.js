/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import WeatherProject from "./WeatherProject"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WeatherProject);
