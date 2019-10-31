import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
// Version can be specified in package.json
import HomeScreen from './t/HomeScreen';
import DetailsScreen from './t/DetailsScreen';
import MuaHang from './t/MuaHang';
import FlatListBasics from './t/FlatListBasics';

const NewNavigator = createStackNavigator({
  Home:{screen: HomeScreen},
  Details:{screen: DetailsScreen},
  MuaHang:{screen: MuaHang},
}),

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
