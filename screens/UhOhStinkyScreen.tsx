import React from 'react';
import { Text, View, Button } from 'react-native';
import callNumber from '../util/phonecall';
import drawButton from '../util/drawButton';

function UhOhStinkyScreen() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>Place a Call!</Text>

            {drawButton("Mom", "+15135600436")}
            {drawButton("Garrett Morse", "+15135600436")}
            {drawButton("My Clinician", "+15135600436")}
        </View >
    );
}

export default UhOhStinkyScreen;