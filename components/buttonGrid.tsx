import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Slider,
  Alert
} from "react-native";
import styles from "../util/styles";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const ButtonGrid = ({ labels, toggleValue, selected }) => {
  return (
    <View style={styles.grid}>
      {labels.map(label => {
        const selectedStyle = selected.indexOf(label) >= 0 ? [styles.squareButton, { backgroundColor: 'blue' }] : styles.squareButton;

        return (<TouchableOpacity
          style={selectedStyle}
          onPress={() => toggleValue(label)}
        >
          <Text style={[styles.text, { fontSize: 18 }]}>{label}</Text>
        </TouchableOpacity>);
      })}
    </View>
  );
};

export default ButtonGrid;
