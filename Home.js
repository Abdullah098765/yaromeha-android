import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from './componentes/NavBar.js';
import GroupCreationForm from './componentes/create-group.js';
import Card from './componentes/card.js';
import ModalComponent from './componentes/model.js';
import { useEffect, useState } from 'react';
import LoadingSpinner from './loading.js';

export default function Home() {

  const [allGroupsData, setAllGroupsData] = useState([]);
  const [showLoading, setshowLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      fetch("https://yaromeha-server-production.up.railway.app/get_groups")
        .then(response => response.text())
        .then(result => {
          setAllGroupsData(JSON.parse(result));
          // console.log(JSON.parse(result));
          setshowLoading(false)
        })
        .catch(error => console.log("error", error));
    }, 200);
  }, []);


  return (

    <View>

      <ScrollView>
        <StatusBar style="light" />
        <Navbar />
        <GroupCreationForm />
        {!showLoading
          ? <View style={styles.card} >
            {allGroupsData && allGroupsData.map((group, index) => (
              <Card key={index} group={group} />
            ))}
          </View> : <ActivityIndicator
            style={styles.loadingSpinner}
            size="large"
            color="rgba(22, 172, 159, 0.5)"
          />
        }


      </ScrollView>
      <ModalComponent />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#053f38',
    // display: "flex",
  },
  Text: {
    color: '#ffff'
  },
  card: {

    padding: 20


  }

});



