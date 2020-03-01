import React from 'react';
import { Text } from 'react-native';

function Title({ text }) {
  return <Text style={{ marginTop: 25, marginLeft: 15, fontSize: 26, fontWeight: 'bold' }}>{text}</Text>;
}

export default Title;