import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { callNumber } from './phonecall';
import styles from "./styles";
import { Feather } from '@expo/vector-icons';

function drawCallButton(name: string, telNumber: string) {
    return (
        <TouchableOpacity onPress={() => callNumber(telNumber)} style={styles.button} >
            <View style={{ flexDirection: "row" }}>
                <Feather name="phone" style={{ alignItems: "flex-start" }} size={40} color={"lightblue"} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default drawCallButton;