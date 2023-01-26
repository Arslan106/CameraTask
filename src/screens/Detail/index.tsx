/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {IMAGES} from '@src/constants';

export const Detail = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.emptySection}></View>
        <Image
          source={{uri: props?.route?.params?.data?.uri}}
          style={styles.imagePreview}
        />
      <View style={styles.bottomButtonsArea}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image source={IMAGES.backIcon} />
          <Text style={styles.buttonText}> Retake </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Image source={IMAGES.greenCheckIcon} />
          <Text style={styles.buttonText}> Use photo </Text>
        </TouchableOpacity>
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
    height: 240,
    width: '100%',
    borderRadius: 120,
    overflow: 'hidden'
  },
  imagePreview: {
    flex: 0.6,
    alignItems: 'center',
    borderRadius:12,
    overflow: 'hidden',
  },
  bottomButtonsArea: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  buttons:{
    flexDirection: 'row',padding:12
  },
  buttonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
