import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row:{
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text:{
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  }
})

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
