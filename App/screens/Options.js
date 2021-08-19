import React from 'react';
import { SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        title="Themes"
        onPress={() => alert('todo!')}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="React Native Basics"
        onPress={() => alert('todo!')}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="React Native by Example"
        onPress={() => alert('todo!')}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </SafeAreaView>
  );
};