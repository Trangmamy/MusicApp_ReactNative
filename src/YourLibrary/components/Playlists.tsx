import {useNavigation} from '@react-navigation/native';
import {PLAYLIST} from 'data/index';
import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Playlist = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('YourLibrary')}>
            <Image source={require('../../assets/icons/back.png')} />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              color: '#fff',
              opacity: 0.75,
              paddingLeft: 20,
            }}>
            Playlists
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            opacity: 0.5,
            paddingVertical: 10,
          }}>
          12 playlists
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.searchBox}>
            <Image source={require('../../assets/icons/search.png')} />
            <TextInput
              placeholder="Search "
              autoCapitalize="none"
              style={{
                fontSize: 16,
                color: 'white',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            />
          </View>
          <Image source={require('../../assets/icons/add.png')} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/haichieu.png')}
            style={{width: 20, height: 20, marginRight: 5}}
          />
          <Text style={{color: '#fff', fontSize: 16, opacity: 0.75}}>
            Recents
          </Text>
        </View>
        <FlatList
          data={PLAYLIST}
          keyExtractor={item => item.title}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{
                    width: 64,
                    height: 64,
                    margin: 10,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    color: '#fff',
                    opacity: 0.75,
                    fontSize: 12,
                    fontWeight: 'bold',
                    width: 50,
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
          style={{flex: 1}}></FlatList>
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
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    opacity: 0.75,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
});
