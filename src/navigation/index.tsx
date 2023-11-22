import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/Search';
import {YourLibraryScr} from '../YourLibrary';
import {SignUpScreen} from '../screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Image, StatusBar} from 'react-native';
import {DemoTab} from 'screens/DemoTab';
import {SearchTab} from 'screens/Search/SearchTab';
import {likeSong} from 'src/YourLibrary/components/likeSong';
import {Download} from 'src/YourLibrary/components/Download';
import {Playlist} from 'src/YourLibrary/components/Playlists';

const Stack = createNativeStackNavigator();

export const Router = () => {
  const {isLogin} = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {isLogin ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Tab"
            component={TabBottom}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={SignUpScreen}
          />
        )}
        {GlobalScreens()}
        {BackScreens()}
        {LikeSong()}
        {download()}
        {playlist()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();
const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/icons/home1.png')
              : require('../assets/icons/home1.png');
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('../assets/icons/Frame.png')
              : require('../assets/icons/Frame.png');
          } else if (route.name === 'YourLibrary') {
            iconName = focused
              ? require('../assets/icons/library_music.png')
              : require('../assets/icons/library_music.png');
          }

          return <Image source={iconName} style={{tintColor: color}} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={DemoTab}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/home1.png')
                  : require('../assets/icons/home1.png')
              }
              style={{tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/Frame.png')
                  : require('../assets/icons/Frame.png')
              }
              style={{tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="YourLibrary"
        component={YourLibraryScr}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/library_music.png')
                  : require('../assets/icons/library_music.png')
              }
              style={{tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const GlobalScreens = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen component={SearchTab} name="SearchTab" />
    </Stack.Group>
  );
};
const BackScreens = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen component={SearchScreen} name="SearchScreen" />
    </Stack.Group>
  );
};
const LikeSong = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen component={likeSong} name="likeSong" />
    </Stack.Group>
  );
};
const download = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen component={Download} name="Download" />
    </Stack.Group>
  );
};
const playlist = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen component={Playlist} name="Playlist" />
    </Stack.Group>
  );
};
