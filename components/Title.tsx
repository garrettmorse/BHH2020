import React from 'react';
import { Text } from 'react-native';

function Title({ text }) {
  return <Text style={{ marginTop: 5, marginLeft: 5, fontSize: 26, fontWeight: 'bold' }}>{text}</Text>;
}

export default Title;