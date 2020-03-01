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

const buttonGrid = (label1, label2, label3) => {
  return (
    <View style={styles.grid}>
      <TouchableOpacity
        style={styles.squareButton}
        onPress={() => alert("cheese")}
      >
        <Text style={[styles.text, { fontSize: 18 }]}>{label1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.squareButton}
        onPress={() => alert("cheese")}
      >
        <Text style={[styles.text, { fontSize: 18 }]}>{label2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.squareButton}
        onPress={() => alert("cheese")}
      >
        <Text style={[styles.text, { fontSize: 18 }]}>{label3}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default buttonGrid;
