import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { callNumber } from './phonecall';
import styles from "./styles";
import { Feather } from '@expo/vector-icons';

function drawCallButton(name: string, telNumber: string) {
    return (
        <TouchableOpacity onPress={() => callNumber(telNumber)} style={styles.button} >
            <Feather name="phone" size={50} color={"#6c63ff"} />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
export default drawCallButton;