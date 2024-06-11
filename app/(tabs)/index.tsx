import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import { View } from '@/components/Themed';
import { IconButton } from '@/components/IconButton';
import Draggable from 'react-native-draggable';

const logo = require('../../assets/images/app/logo.png');

export default function TabOneScreen() {

  const handleTrashcanSelection = (trashcanType: string) => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={logo} style={styles.logo}/>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 220,
    height: 220
  },

  button: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: 'green',
    marginBottom: 50,
    borderRadius: 10
  },

  image_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button_text: {
    color: 'white'
  }

});
