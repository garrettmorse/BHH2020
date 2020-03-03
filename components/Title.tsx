import React from 'react';
import { Text } from 'react-native';

function Title({ text }) {
  return <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 32, fontWeight: 'bold' }}>{text}</Text>;
}

export default Title;