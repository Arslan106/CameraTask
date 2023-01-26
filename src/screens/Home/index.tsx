/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
  requireNativeComponent,
  NativeModules,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
export const Home: React.FC = (props: any) => {
  //  Native module implemented for ios
  //  but theres some conflicts in the
  //  library that you have provided

  // const {CameraView} = NativeModules;

  useEffect(() => {
    if (Platform.OS === 'android') {
      const granted = async () => {
        await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
      };

      if (!granted) {
        Alert.alert(
          'Access Denied',
          'You need Camera permission to use this app',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
        );
      }
    }
  }, []);
  const cameraRef: any = useRef(null);
  const TakePicture = async () => {
    // here is the native function i am using
    // const res =  CameraView.takePhoto()

    if (Platform.OS == 'ios' && !cameraRef.current.state.isAuthorized) {
      Alert.alert(
        'Access Denied',
        'You need Camera permission to use this app',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ],
      );
    } else {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      props.navigation.navigate('Detail', {
        data: data,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.emptySection}></View>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}></RNCamera>
      <View style={styles.buttonSec}>
        <View style={styles.snapButtonBorder}>
          <TouchableOpacity
            onPress={() => TakePicture()}
            style={styles.capture}>
            <Text style={styles.snapButtonText}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  emptySection: {
    flex: 0.15,
  },
  preview: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 40,

    margin: 2,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonSec: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapButtonBorder: {
    width: 90,
    borderRadius: 50,
    justifyContent: 'center',
    height: 90,
    borderWidth: 3,
    borderColor: 'white',
  },
  snapButtonText: {
    fontSize: 12,
    color: 'black',
  },
});
