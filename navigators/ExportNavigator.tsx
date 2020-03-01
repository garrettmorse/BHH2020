import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import ExportScreen from '../screens/ExportScreen';


const ExportStackNavigator = createStackNavigator();

function ExportStackScreen() {
  return (
    <ExportStackNavigator.Navigator>
      <ExportStackNavigator.Screen name="Export Data" component={ExportScreen} />
    </ExportStackNavigator.Navigator>
  );
}

export default ExportStackScreen;