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
      <Image source={logo} style={styles.logo}/>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>Começar</Text>
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
    width: 200,
    height: 200
  },

  button: {
    
  }

});
