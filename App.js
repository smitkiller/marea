import React,{Component} from 'react';
import { View,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DefaultTheme,Provider as PaperProvider} from 'react-native-paper';
import styles from './styles';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import TabViewAreaScreen from './components/area/TabViewArea';
import ManageAreaScreen from './components/area/ManageArea';
import AddAreaScreen from './components/area/AddArea';

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={24} color={tintColor}  />
      )
    },
 
  },
  TabViewArea: {
    screen: TabViewAreaScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-settings" size={24} color={tintColor}  />
      )
    },
  },
},
{
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
     //   style: {
      //  backgroundColor: '#42a5f5',
     // }
    }
  }
);

const Stack = createStackNavigator({
  Main: {
    screen: Tabs,
     navigationOptions: {
          header: null,

    }
  },

   ManageArea: {
    screen: ManageAreaScreen,
    navigationOptions: {
          title: 'Managemet Area',
    }

  },

  AddArea:{
    screen:AddAreaScreen,
    navigationOptions:{
      title:'Add Area'
    }
  }

},{
  navigationOptions: {
        headerStyle: {
            backgroundColor: 'dodgerblue',
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white',

  }
}

  
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default class App extends Component{
  render() {
    return (   
    <View style={styles.container}>  
        <PaperProvider theme={theme} >
          <Stack/>
        </PaperProvider>
    </View>
    );
  }
}