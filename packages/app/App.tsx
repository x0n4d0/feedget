import 'react-native-gesture-handler';
import 'dotenv/config';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import Widget from './src/components/widget';
import { StatusBar } from './src/components/status-bar';

import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <StatusBar />
      <Widget />
    </View>
  );
}
