import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';

import Main from './pages/Main';
import Profile from './pages/Profile';
import LocationHelp from './pages/LocationHelp';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Perfil no Github',
        },
      },
      LocationHelp: {
        screen: LocationHelp,
        navigationOptions: {
          title: 'Localização Manual',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#33CBD4',
        },
        headerBackground: () => (
          <LinearGradient
            colors={['#153C77', '#1e4e96', '#153C77']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
        headerTitleAlign: 'center',
      },
    }
  )
);

export default Routes;
