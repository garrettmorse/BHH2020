import React from "react";
import {
  Text,
  View,
  TouchableHighlight
} from "react-native";
import styles, { Colors } from "../util/styles";

const ButtonGrid = ({ labels, toggleValue, selected }) => {
  return (
    <View style={styles.grid}>
      {labels.map(label => {
        const selectedStyle = selected.indexOf(label) >= 0 ? [styles.squareButton, { backgroundColor: Colors.selectedPrimary }] : styles.squareButton;


        return (<TouchableHighlight
          style={selectedStyle}
          underlayColor="#7c76f9"
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
