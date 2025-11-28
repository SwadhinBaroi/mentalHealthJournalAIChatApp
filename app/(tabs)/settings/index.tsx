import Back from '@/assets/svgs/back.svg';
import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 20,
          marginLeft: 20,
          marginTop: 20,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: Colors.brown,
            alignItems: 'flex-start',
            borderRadius: 40,
          }}
        >
          <Back />
        </TouchableOpacity>
        <RNText variant="title" size="xl">
          Settings
        </RNText>
      </View>
      <ScrollView>
        <View
          style={{
            width: '90%',
            marginTop: 20,
            marginHorizontal: 'auto',
            backgroundColor: Colors.white,
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 10,
            gap: 20,
            alignItems: 'center',
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 6,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.green,
              borderRadius: 150,
              overflow: 'hidden',
            }}
          >
            <Image
              source={require('@/assets/images/person.jpg')}
              style={{ height: 60, width: 60, overflow: 'hidden' }}
            />
          </View>
          <View>
            <RNText variant="header" size="xl" style={{ color: Colors.brown }}>
              Selena Gomeze
            </RNText>
            <RNText variant="medium" size="md" style={{ color: Colors.orange }}>
              Personalize your journey
            </RNText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
