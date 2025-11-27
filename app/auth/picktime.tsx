import Calender from '@/assets/svgs/calender.svg';
import TimePick from '@/components/timepick';
import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PickTime = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <SafeAreaView>
      <RNText>Date pick</RNText>
      <View>
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field: { onChange, value } }) => (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  backgroundColor: Colors.white,
                  borderRadius: 30,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  alignItems: 'center',
                  borderColor: Colors.green,
                }}
              >
                <Calender />
                <TextInput
                  placeholder="Select Date"
                  value={value ? value : ''}
                  editable={false}
                  pointerEvents="none"
                  placeholderTextColor="#999"
                  style={{
                    flex: 1,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    fontSize: 18,
                    fontFamily: 'PoppinsRegular',
                    backgroundColor: Colors.white,
                    color: Colors.brown,
                  }}
                />
              </View>
              <TimePick onChange={onChange} />
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default PickTime;
