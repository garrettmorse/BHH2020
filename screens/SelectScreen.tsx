import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet, StatusBar } from "react-native";
import styles from "../util/styles";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={[{ alignItems: 'center' }]}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("Quick Log")}
      >
        <Text style={styles.text}> Quick Update </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detailed Log")}
      >
        <Text style={styles.text}> Detailed Update </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Video Now Recording!")}
      >
        <Text style={styles.text}> Video Update </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectScreen;
