import 'react-native-screens';
import {StyleSheet, Text, View} from 'react-native';
import {Router} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default () => {
  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: '#FCFCFC'}}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
