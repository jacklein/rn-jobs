import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppNavigator = createSwitchNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: createBottomTabNavigator({
    map: MapScreen,
    deck: DeckScreen,
    review: createStackNavigator({
      review: ReviewScreen,
      settings: SettingsScreen
    })
  })
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

export default App;