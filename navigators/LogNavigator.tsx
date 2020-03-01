import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import SelectScreen from '../screens/SelectScreen';
import DetailLog from '../screens/DetailLog';
import QuickLog from '../screens/QuickLog';

const LogStackNavigator = createStackNavigator();

function LogStackScreen() {
  return (
    <LogStackNavigator.Navigator>
      <LogStackNavigator.Screen name="Log Event" component={SelectScreen} />
      <LogStackNavigator.Screen name="Quick Log" component={QuickLog} />
      <LogStackNavigator.Screen name="Detailed Log" component={DetailLog} />
    </LogStackNavigator.Navigator>
  );
}

export default LogStackScreen;