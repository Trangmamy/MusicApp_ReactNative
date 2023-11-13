import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/Search';
import {YourLibraryScr} from '../YourLibrary';
import {SignUpScreen} from '../screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Image, StatusBar} from 'react-native';

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
        component={HomeScreen}
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
