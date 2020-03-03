import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogStackScreen from './LogNavigator';
import ExportStackScreen from './ExportNavigator';
import CallStackScreen from './EmergencyNavigator';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../util/styles';


const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, }) => {
            if (route.name === "Log") {
              return <Ionicons name="ios-add" size={25} color={focused ? "darkblue" : "gray"} />;
            } else if (route.name === "Export") {
              return <Ionicons name="ios-cloud-download" size={25} color={focused ? "darkblue" : "gray"} />;
            } else {
              return <View style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                backgroundColor: focused ? Colors.selectedPrimary : Colors.primary,
                paddingTop: 15,
                alignItems: 'center',
                shadowOpacity: 0.4,
                shadowRadius: 2,
                shadowOffset: { height: 1, width: 1 }
              }}>
                <Ionicons name="ios-alert" size={40} color={"white"} />
              </View>;
            }
          },
          tabBarLabel: ({ focused }) => {
            if (route.name === "Panic") {
              return <Text style={{ color: "white", fontSize: 13 }}>{route.name}</Text>;
            }

            return <Text style={{ color: focused ? "darkblue" : "gray", fontSize: 13 }}>{route.name}</Text>;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Log" component={LogStackScreen} />
        <Tab.Screen name="Panic" component={CallStackScreen} />
        <Tab.Screen name="Export" component={ExportStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};