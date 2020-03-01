import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Slider,
  Alert,
  TouchableHighlight
} from "react-native";
import styles from "../util/styles";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const ButtonGrid = ({ labels, toggleValue, selected }) => {
  return (
    <View style={styles.grid}>
      {labels.map(label => {
        const selectedStyle = selected.indexOf(label) >= 0 ? [styles.squareButton, { backgroundColor: '#b8bde6' }] : styles.squareButton;

        return (<TouchableHighlight
          style={selectedStyle}
          underlayColor="lightblue"
          onPress={() => {
            toggleValue(label);
          }}
        >
          <Text style={[styles.text, { fontSize: 18 }]}>{label}</Text>
        </TouchableHighlight>);
      })}
    </View>
  );
};

export default ButtonGrid;
