import { View } from 'react-native';

import { theme } from './src/theme';

import { Widget } from './src/components/widget';
import { StatusBar } from './src/components/status-bar';

export default function App() {
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
