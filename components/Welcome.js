import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground
        source={require('/Users/pratikmandi/Documents/ReactNative/bitm/components/images/welcomescreen.jpg')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Text style={{
            margin: 20,
            fontWeight: 'bold',
            fontSize: 35,
            color: 'white',
          }}>
            Welcome!
          </Text>

          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Text style={{
              margin: 20,
              fontWeight: 'bold',
              fontSize: 35,
              color: 'white',
            }}>
              Let's Get Started
            </Text>
            <View style={{ width: 40, height: 40 }}>
              <Button
                onPress={() => navigation.navigate('Main')}
                title=""
                icon={{
                  name: 'arrow-forward',
                  type: 'ionicons',
                  size: 30,
                  color: 'black',
                }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: '#dce7f7',
                  borderColor: 'transparent',
                  borderRadius: 80,
                }}
                containerStyle={{
                  width: 100,
                  height: 100,
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
