import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from './componentes/NavBar.js';
import GroupCreationForm from './componentes/create-group.js';
import Card from './componentes/card.js';
import Home from './Home.js'
export default function App() {
  return (

    <View style={styles.container}>
      <Home />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075e54',
  },


});



