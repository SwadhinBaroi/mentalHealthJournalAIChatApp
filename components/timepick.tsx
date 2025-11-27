import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePick = ({ onChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const formatTo12HourTime = (isoString) => {
    const date = new Date(isoString);

    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
    const time = formatTo12HourTime(date);
    console.log(time);
    onChange(time);
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerStyleIOS={{
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default TimePick;
