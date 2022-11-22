import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5, FontAwesome} from '@expo/vector-icons'; 

export default function TelaFontAwesome() {
  return (
    <View style={styles.container}>
      <Text>FontAwesome</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
