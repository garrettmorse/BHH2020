import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { callNumber } from './phonecall';
import styles, { Colors } from "./styles";
import { Feather } from '@expo/vector-icons';

function drawCallButton(name: string, telNumber: string) {
    return (
        <TouchableOpacity onPress={() => callNumber(telNumber)} style={[styles.button, { alignItems: 'flex-start' }]} >
            <View style={{ flexDirection: "row" }}>

                <Text style={[styles.text, { marginTop: 5 }]}>{name}</Text>
                <View style={{ flex: 1 }} />
                <Feather name="phone" style={{ marginRight: 15 }} size={40} color={'white'} />
            </View>
        </TouchableOpacity>
    );
}
export default drawCallButton;