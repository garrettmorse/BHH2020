import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { callNumber } from './phonecall';
import styles from "./styles";

function drawCallButton(name: string, telNumber: string) {
    return (
        <TouchableOpacity onPress={() => callNumber(telNumber)} style={styles.button} >
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
export default drawCallButton;