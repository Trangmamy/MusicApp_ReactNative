import {Featuring} from 'components/Featuring';
import {ListRecently} from 'components/ListRecently';
import {Mixes} from 'components/Mixes';
import Recently from 'components/Recently';
import {
  FROM_ARTISTS,
  NEW_FEATURING,
  NEW_MIXES,
  NEW_RECENTLY,
  PLAYLISTS,
  RELEASES,
} from 'data/index';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sizes, spacing} from 'src/themes';

export const ForYou = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
  },
});
