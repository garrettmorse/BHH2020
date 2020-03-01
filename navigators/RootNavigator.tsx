import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogStackScreen from './LogNavigator';
import ExportScreen from '../screens/ExportScreen';



const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Log" component={LogStackScreen} />
        <Tab.Screen name="Export" component={ExportScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};