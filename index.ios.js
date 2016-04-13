/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import {
  AppRegistry,
} from 'react-native';

import Relay from 'react-relay';


import MyApp from './MyApp';



Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://ua-ql.herokuapp.com/graphql')
);


AppRegistry.registerComponent('AwesomeProject', () => MyApp);
