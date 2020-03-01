import React from 'react';
import { Text, View, Button, ScrollView, Image } from 'react-native';
import drawCallButton from '../util/drawCallButton';


function UhOhStinkyScreen() {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

            <ScrollView contentContainerStyle={{ alignItems: 'center' }} nestedScrollEnabled={false} overScrollMode={'never'} showsVerticalScrollIndicator={false} scrollEnabled={true} style={{ flex: 1, height: "100%", width: "100%" }}>
                {drawCallButton("Mom", "+15137677212")}
                {drawCallButton("Garrett Morse", "+15135600436")}
                {drawCallButton("My Clinician", "+15137602878")}
                <Image
                    style={[{ padding: -50, height: "50%", width: "100%" }]}
                    source={require("../assets/images/phone_call.png")}
                />
            </ScrollView>

        </View >
    );
}

export default UhOhStinkyScreen;