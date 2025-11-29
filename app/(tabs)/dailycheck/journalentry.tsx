import AI from '@/assets/svgs/ai.svg';
import Back from '@/assets/svgs/back.svg';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Portal } from 'react-native-portalize';
import { SafeAreaView } from 'react-native-safe-area-context';

const JournalEntry = () => {
  const [text, setText] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 20,
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
            Assessment
          </RNText>
        </View>
        <View
          style={{
            backgroundColor: '#E8DDD9',
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 30,
          }}
        >
          <RNText variant="title" size="sm" style={{ color: '#926247' }}>
            4 OF 4
          </RNText>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          marginHorizontal: 'auto',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={{ gap: 50, marginBottom: 200 }}>
          <View style={{ width: '90%', marginHorizontal: 'auto' }}>
            <RNText variant="header" size="3xl" style={{ textAlign: 'center' }}>
              Share Your Thoughts and Feelings from Today, Let Your Emotions
              Speak
            </RNText>
          </View>
          <View>
            <RNText variant="header" size="lg">
              Journal Entry
            </RNText>
            <View style={{ flex: 1, paddingVertical: 10 }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 15,
                  fontSize: 16,
                  backgroundColor: '#D3DCBD',
                  height: 180,
                }}
                placeholder="Write about your day..."
                multiline={true}
                numberOfLines={6}
                value={text}
                onChangeText={setText}
                textAlignVertical="top"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: Colors.green,
            paddingVertical: 13,
            borderRadius: 30,
            alignItems: 'center',
            gap: 10,
            marginBottom: 50,
          }}
        >
          <AI />
          <RNText variant="subtitle" size="lg">
            Need inspiration?
          </RNText>
        </TouchableOpacity>
        <RNButton value={'Save Entry'} path={'../chat'} />
        <Portal>
          <BlurView
            intensity={30}
            tint="dark"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: '70%',
                  width: '90%',
                  marginHorizontal: 'auto',
                  marginVertical: 'auto',
                  backgroundColor: Colors.white,
                  borderRadius: 20,
                }}
              >
                <Text>A portal on top of the rest</Text>
              </View>
            </View>
          </BlurView>
        </Portal>
      </View>
    </SafeAreaView>
  );
};

export default JournalEntry;
