import React from 'react';
import { Text,View } from 'react-native';
import { 
  createStackNavigator, 
  createMaterialTopTabNavigator } from 'react-navigation';
import AreaScreen from './Area';
import ListScreen from './List';



const TabScreen = createMaterialTopTabNavigator(
  {
    area: { screen: AreaScreen },
    list: { screen: ListScreen },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);




const TabViewArea = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'จัดการพื้นที่',
    },
  },
});
//For React Navigation Version 2+
export default TabViewArea;