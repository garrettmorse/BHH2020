import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import styles from "../util/styles";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quick Log")}
        >
          <Text style={styles.text}> Quick Update </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Detailed Log")}
        >
          <Text style={styles.text}> Detailed Update </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Video Now Recording!")}
        >
          <Text style={styles.text}> Video Update </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectScreen;
