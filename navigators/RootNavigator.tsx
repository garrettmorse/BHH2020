import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogStackScreen from './LogNavigator';
import ExportStackScreen from './ExportNavigator';
import UhOhStinkyScreen from "../screens/UhOhStinkyScreen";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Log") {
              return <Ionicons name="ios-add" size={25} color={"black"} />;
            } else if (route.name === "Export") {
              return <MaterialCommunityIcons name="export" size={25} color={"gray"} />;
            } else {
              return <Ionicons name="ios-alert" size={30} color={"red"} />;
            }
          },
        })}
      >
        <Tab.Screen name="Log" component={LogStackScreen} />
        <Tab.Screen name="Emergency" component={UhOhStinkyScreen} />
        <Tab.Screen name="Export" component={ExportStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};