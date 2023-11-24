import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';

export const Player = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            paddingBottom: 10,
          }}>
          <Image source={require('../../assets/icons/next.png')} />
          <Image
            source={require('../../assets/icons/more_vert.png')}
            style={{marginRight: 20}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
          }}>
          <Image
            source={require('../../assets/images/bg_song.png')}
            style={{width: 350, height: 350, borderRadius: 15}}
          />
        </View>
        <View style={styles.wapper}>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/cast.png')} />
            <Text style={{paddingLeft: 5}}>Connect to a device</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.txt}>Inside Out</Text>
            <Text style={styles.text}>The Chainsmokers, Cha...</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={require('../../assets/icons/favorite.png')} />
            <Image
              source={require('../../assets/icons/download_in.png')}
              style={{marginHorizontal: 10}}
            />
            <Image source={require('../../assets/icons/share.png')} />
          </View>
        </View>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 15,
  },
  wapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  box: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#888',
  },
  txt: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0.75,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.5,
  },
});
