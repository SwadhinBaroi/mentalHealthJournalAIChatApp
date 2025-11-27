import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Arrow from '../../assets/svgs/arrowright.svg';

const First = () => {
  return (
    <View style={{ flex: 1, overflow: 'hidden' }}>
      <ImageBackground
        source={require('@/assets/images/9830.jpg')}
        style={{ flex: 0.7, width: '100%' }}
        resizeMode="cover"
        imageStyle={{ top: 0, position: 'absolute' }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Top mini circles */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 20,
              gap: 5,
            }}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <View
                key={index}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  backgroundColor: 'transparent',
                  marginHorizontal: 5,
                  borderWidth: 1,
                }}
              />
            ))}
          </View>

          <View
            style={{
              backgroundColor: Colors.white,
              width: 960,
              height: 960,
              position: 'absolute',
              bottom: -900,
              left: '50%',
              marginLeft: -480,
              borderRadius: 1234,
            }}
          />
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: 30, marginBottom: -250 }}>
              <View style={{backgroundColor: '#E5EAD7', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20}}>
                <RNText variant='title' size='sm' style={{color: '#7D944D'}}>STEP 1</RNText>
              </View> 
              <View style={{ alignItems: 'center'}}>
                  <RNText variant='title' size='3xl' >
                  Personalize Your Mental 
                  </RNText>
                  <View style={{flexDirection: 'row', gap: 5, alignItems:'center'}}>
                    <RNText variant='title' size='3xl' style={{color: Colors.green}} >
                    Health State
                    </RNText>
                    <RNText variant='title' size='3xl'>With AI</RNText>
                  </View>
              </View>
              <TouchableOpacity onPress={()=> router.push('/onboarding/second')} style={{backgroundColor: Colors.brown, paddingHorizontal: 20 , paddingVertical: 20, borderRadius: 100}}>
                <Arrow />
              </TouchableOpacity>
          </View>
        </SafeAreaView>
        
      </ImageBackground>
      
    </View>
  );
};

export default First;
