import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Featuring} from '../../components/Featuring';
import {
  FROM_ARTISTS,
  NEW_FEATURING,
  NEW_MIXES,
  NEW_RECENTLY,
  PLAYLISTS,
  RELEASES,
} from '../../data';
import Recently from '../../components/Recently';
import {sizes, spacing} from '../../themes';
import {ListRecently} from '../../components/ListRecently';
import {Mixes} from '../../components/Mixes';

export const HomeScreen = () => {
  const [categories, setCategories] = useState([
    {name: 'For you'},
    {name: 'Relax'},
    {name: 'Workout'},
    {name: 'Travel'},
    {name: 'Focus'},
    {name: 'Energize'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MainHeader}>
          <View style={styles.HeaderLeft}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '300',
                alignItems: 'center',
                color: '#fff',
                opacity: 0.75,
              }}>
              Hi Logan,
            </Text>
            <Text style={styles.HeaderText}>Good Evening</Text>
          </View>
          <View style={styles.HeaderRight}>
            <Image source={require('../../assets/icons/bell.png')} />
            <Image
              source={require('../../assets/images/avata.png')}
              style={{marginHorizontal: 20}}
            />
          </View>
        </View>
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <View>
                  <Text
                    style={{
                      color: '#fff',
                      opacity: 0.5,
                      margin: 10,
                      fontSize: 20,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          style={{flex: 1, height: 50}}></FlatList>
        <View>
          <Text
            style={{
              color: '#fff',
              opacity: 0.75,
              fontWeight: '500',
              fontSize: sizes.h2,
              marginLeft: 10,
            }}>
            Featuring Today
          </Text>
        </View>
        <Featuring list={NEW_FEATURING} />
        <Recently
          title="Recently Played"
          buttonTitle="See more"
          onPress={() => {}}
        />
        <ListRecently list={NEW_RECENTLY} />
        <Text
          style={{
            fontSize: sizes.h2,
            fontWeight: '500',
            color: '#fff',
            opacity: 0.75,
            marginLeft: spacing.l,
            marginTop: spacing.l,
          }}>
          Mixes for you
        </Text>
        <Mixes list={NEW_MIXES} />
        <Recently
          title="From Artists You Follow"
          buttonTitle="See more"
          onPress={() => {}}
        />
        <Mixes list={FROM_ARTISTS} />
        <Recently
          title="New Releases"
          buttonTitle="See more"
          onPress={() => {}}
        />
        <ListRecently list={RELEASES} />
        <Recently
          title="Top Playlists"
          buttonTitle="See more"
          onPress={() => {}}
        />
        <Mixes list={PLAYLISTS} />
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
  MainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  HeaderLeft: {},
  HeaderText: {
    fontSize: sizes.h2,
    fontWeight: '500',
    alignItems: 'center',
    color: '#fff',
    opacity: 0.75,
  },
  HeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
