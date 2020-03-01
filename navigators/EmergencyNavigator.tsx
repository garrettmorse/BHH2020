import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import UhOhStinkyScreen from '../screens/UhOhStinkyScreen';

const CallStackNavigator = createStackNavigator();

function CallStackScreen() {
    return (
        <CallStackNavigator.Navigator>
            <CallStackNavigator.Screen name="Emergency Contacts" component={UhOhStinkyScreen} />
        </CallStackNavigator.Navigator>
    );
}

export default CallStackScreen;