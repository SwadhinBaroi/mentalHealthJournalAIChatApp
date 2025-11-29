import Back from '@/assets/svgs/back.svg';
import Feedback from '@/assets/svgs/feedback.svg';
import Key from '@/assets/svgs/key.svg';
import Lock from '@/assets/svgs/lock.svg';
import Logout from '@/assets/svgs/logout.svg';
import Next from '@/assets/svgs/next.svg';
import Notification from '@/assets/svgs/notification.svg';
import Share from '@/assets/svgs/share.svg';
import User from '@/assets/svgs/user.svg';
import { RNText } from '@/components/ui/input';
import { Colors } from '@/constants/color';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <>
      <SafeAreaView style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 20,
            marginLeft: 20,
            marginTop: 20,
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
      </SafeAreaView>
      <ScrollView style={{ flex: 1 }}>
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
            borderRadius: 20,
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

        <View
          style={{ width: '90%', marginHorizontal: 'auto', paddingBottom: 50 }}
        >
          <RNText
            variant="title"
            size="lg"
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            General Settings
          </RNText>
          <View style={{ gap: 15 }}>
            <TouchableOpacity
              onPress={() => router.push('/(tabs)/settings/personalinfo')}
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <User />
                </View>
                <RNText variant="header" size="lg">
                  Personal Information
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Key />
                </View>
                <RNText variant="header" size="lg">
                  Change Password
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Notification />
                </View>
                <RNText variant="header" size="lg">
                  Push Notifications
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Share />
                </View>
                <RNText variant="header" size="lg">
                  Invite Friends
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Feedback />
                </View>
                <RNText variant="header" size="lg">
                  Submit Feedback
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Lock />
                </View>
                <RNText variant="header" size="lg">
                  Previcy and Policy
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.background,
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Logout />
                </View>
                <RNText variant="header" size="lg">
                  Log Out
                </RNText>
              </View>
              <Next />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default index;
