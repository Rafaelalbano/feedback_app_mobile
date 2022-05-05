import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';
import { Widget } from './src/components/Widget';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}
    >
      <Widget />
      <StatusBar style="auto" />
    </View>
  );
}

