import ArrowRight from '@/assets/svgs/arrowright.svg';
import { Colors } from '@/constants/color';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RNText } from './input';

const RNButton = ({ path, value }: { path?: String; value: String }) => {
  // console.log(path);
  return (
    <TouchableOpacity
      onPress={() => router.push(path)}
      style={{
        backgroundColor: Colors.brown,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        gap: 15,
        borderRadius: 30,
      }}
    >
      <RNText variant="title" size="lg" style={{ color: Colors.white }}>
        {value}
      </RNText>
      <ArrowRight />
    </TouchableOpacity>
  );
};

export default RNButton;
