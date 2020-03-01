import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { callNumber } from './phonecall';
import styles from "./styles";

function drawButton(name: string, telNumber: string) {
    return (
        <TouchableOpacity onPress={() => callNumber(telNumber)} style={styles.button} >
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
export default drawButton;