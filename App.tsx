import React from 'react';
import { SafeAreaView } from 'react-native';
import { RegisterScreen } from './src/screens/registerScreen';
import { Appbase } from './src/screens/appBase';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Appbase />
    </SafeAreaView>
  );
}
export default App;
