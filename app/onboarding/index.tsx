import ArrowRight from '@/assets/svgs/arrowright.svg';
import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import { router } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View
        style={{
          flex: 1,
          width: '90%',
          marginHorizontal: 'auto',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={require('@/assets/images/logo.png')} />
        <RNText variant="title" size="3xl">
          Welcome to MindMate AI
        </RNText>
        <View
          style={{ width: '65%', marginHorizontal: 'auto', marginBottom: 20 }}
        >
          <RNText variant="medium" size="lg" style={{ textAlign: 'center' }}>
            A mindful mental health tool by Honeysuckle Co. 🍃
          </RNText>
        </View>
        <Image source={require('@/assets/images/flower.png')} />
        <TouchableOpacity
          onPress={() => router.push('/onboarding/first')}
          style={{
            flexDirection: 'row',
            gap: 10,
            borderWidth: 1,
            backgroundColor: Colors.brown,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 30,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <RNText variant="title" size="lg" style={{ color: Colors.white }}>
            Get Started
          </RNText>
          <ArrowRight />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <RNText variant="medium" size="md">
            Already have an account?
          </RNText>
          <RNText
            variant="header"
            size="md"
            style={{ color: Colors.orange, textDecorationLine: 'underline' }}
          >
            Sign In
          </RNText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
