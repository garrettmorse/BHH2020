import React from 'react';
import { Text, View, Button } from 'react-native';
import drawCallButton from '../util/drawCallButton';

function UhOhStinkyScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            {drawCallButton("Mom", "+15137677212")}
            {drawCallButton("Garrett Morse", "+15135600436")}
            {drawCallButton("My Clinician", "+15137602878")}
        </View >
    );
}

export default UhOhStinkyScreen;