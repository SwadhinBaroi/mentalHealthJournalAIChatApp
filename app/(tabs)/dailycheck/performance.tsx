import Average from '@/assets/svgs/average.svg';
import Back from '@/assets/svgs/back.svg';
import Depressed from '@/assets/svgs/depressed.svg';
import Entry from '@/assets/svgs/entry.svg';
import Excellent from '@/assets/svgs/excellent.svg';
import Fire from '@/assets/svgs/fire.svg';
import Happy from '@/assets/svgs/happy.svg';
import Neutral from '@/assets/svgs/neutral.svg';
import Sad from '@/assets/svgs/sad.svg';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { SafeAreaView } from 'react-native-safe-area-context';

const Performance = () => {
  const [previousService, setPreviousService] = useState(true);
  const data = [
    { value: 50, label: 'Week 1', frontColor: '#4CAF50' },
    { value: 80, label: 'Week 2', frontColor: '#FF9800' },
    { value: 65, label: 'Week 3', frontColor: '#DF4B01' },
    { value: 90, label: 'Week 4', frontColor: '#219ebc' },
  ];

  return (
    <>
      <SafeAreaView>
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
              Performance Level
            </RNText>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '90%',
            marginHorizontal: 'auto',
            alignItems: 'center',
            paddingTop: 10,
          }}
        >
          <BarChart
            data={data}
            height={250}
            spacing={40}
            xAxisLabelTextStyle={{ fontSize: 12, color: '#444' }}
            yAxisTextStyle={{ color: '#333' }}
          />
        </View>
        <View
          style={{
            width: '90%',
            marginHorizontal: 'auto',
            borderWidth: 1,
            borderColor: Colors.green,
            padding: 20,
            marginTop: 50,
            borderRadius: 15,
            backgroundColor: Colors.white,
            shadowColor: Colors.green,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 4,
            marginBottom: 50,
          }}
        >
          <RNText variant="subtitle" size="lg" style={{ marginBottom: 5 }}>
            Top Emotions
          </RNText>
          <RNText variant="medium" size="md" style={{ marginBottom: 25 }}>
            Most frequesnt emotions this month
          </RNText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}
            >
              <Excellent width={24} height={24} />
              <RNText variant="header" size="md">
                Excellent
              </RNText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  width: '40%',
                  height: 15,
                  backgroundColor: Colors.brown,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                    backgroundColor: Colors.green,
                    borderRadius: 30,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: Colors.green,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 30,
                }}
              >
                <RNText variant="subtitle" size="sm">
                  12 times
                </RNText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}
            >
              <Happy width={24} height={24} />
              <RNText variant="header" size="md">
                Good
              </RNText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  width: '40%',
                  height: 15,
                  backgroundColor: Colors.brown,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                    backgroundColor: Colors.green,
                    borderRadius: 30,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: Colors.green,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 30,
                }}
              >
                <RNText variant="subtitle" size="sm">
                  12 times
                </RNText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}
            >
              <Neutral width={24} height={24} />
              <RNText variant="header" size="md">
                Neutral
              </RNText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  width: '40%',
                  height: 15,
                  backgroundColor: Colors.brown,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                    backgroundColor: Colors.green,
                    borderRadius: 30,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: Colors.green,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 30,
                }}
              >
                <RNText variant="subtitle" size="sm">
                  12 times
                </RNText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}
            >
              <Sad width={24} height={24} />
              <RNText variant="header" size="md">
                Sad
              </RNText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  width: '40%',
                  height: 15,
                  backgroundColor: Colors.brown,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                    backgroundColor: Colors.green,
                    borderRadius: 30,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: Colors.green,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 30,
                }}
              >
                <RNText variant="subtitle" size="sm">
                  12 times
                </RNText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}
            >
              <Depressed width={24} height={24} />
              <RNText variant="header" size="md">
                Depressed
              </RNText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  width: '40%',
                  height: 15,
                  backgroundColor: Colors.brown,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                    backgroundColor: Colors.green,
                    borderRadius: 30,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: Colors.green,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 30,
                }}
              >
                <RNText variant="subtitle" size="sm">
                  12 times
                </RNText>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            marginHorizontal: 'auto',
            marginBottom: 50,
            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.white,
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 15,
              alignItems: 'center',
              borderRadius: 30,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 3,
            }}
          >
            <View
              style={{
                backgroundColor: '#F2F5EB',
                padding: 16,
                borderRadius: 50,
              }}
            >
              <Fire />
            </View>
            <View>
              <RNText variant="title" size="lg">
                Current Streak
              </RNText>
              <RNText variant="medium" size="md">
                🔥 7 days streak!
              </RNText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.white,
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 15,
              alignItems: 'center',
              borderRadius: 30,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 3,
            }}
          >
            <View
              style={{
                backgroundColor: '#FFF0EB',
                padding: 20,
                borderRadius: 50,
              }}
            >
              <Average />
            </View>
            <View>
              <RNText variant="title" size="lg">
                Average Mood
              </RNText>
              <RNText variant="medium" size="md">
                6.8 / 10
              </RNText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.white,
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 15,
              alignItems: 'center',
              borderRadius: 30,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 3,
            }}
          >
            <View
              style={{
                backgroundColor: '#EDEBFF',
                padding: 20,
                borderRadius: 50,
              }}
            >
              <Entry />
            </View>
            <View>
              <RNText variant="title" size="lg">
                Total Entries
              </RNText>
              <RNText variant="medium" size="md">
                42 entries
              </RNText>
            </View>
          </View>
        </View>
        <View
          style={{ width: '70%', marginHorizontal: 'auto', marginBottom: 50 }}
        >
          <RNButton
            value={'View Full Journal'}
            path={'/(tabs)/dailycheck/journalhistory'}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Performance;
