import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { View } from '@/components/Themed';
import { IconButton } from '@/components/IconButton';
import Draggable from 'react-native-draggable';

const lixeiraAzul = require('../../assets/images/app/lata-azul.png');
const lixeiraVermelha = require('../../assets/images/app/lata-vermelha.png');
const lixeiraAmarela = require('../../assets/images/app/lata-amarela.png');
const lixeiraMarrom = require('../../assets/images/app/lata-marrom.png');
const lixeiraVerde = require('../../assets/images/app/lata-verde.png');

const achocolatado = require('../../assets/images/app/achocolatado.png');
const pet = require('../../assets/images/app/pet.png');


export default function TabOneScreen() {

  const handleTrashcanSelection = (trashcanType: string) => {
    console.log(trashcanType)
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.itemsContainer}>
        <Draggable x={0} y={0} imageSource={pet} renderSize={80} shouldReverse />
        <Draggable x={90} y={0} imageSource={achocolatado} renderSize={80} shouldReverse/>
      </View>

      <View style={styles.trashCanContainer}>
        <View style={styles.trashCanRow}>
          <IconButton icon={lixeiraAzul} selected={false} onPress={() => handleTrashcanSelection('papel')}/>
          <IconButton icon={lixeiraVermelha} selected={false} onPress={() => handleTrashcanSelection('plastico')}/>
          <IconButton icon={lixeiraAmarela} selected={false} onPress={() => handleTrashcanSelection('metal')}/>
        </View>

        <View style={styles.trashCanRow}>
          <IconButton icon={lixeiraVerde} selected={false} onPress={() => handleTrashcanSelection('vidro')}/>
          <IconButton icon={lixeiraMarrom} selected={false} onPress={() => handleTrashcanSelection('organico')}/>
        </View>
      </View>
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

  itemsContainer: {
    marginTop: 50,
    width: '100%'
  },

  trashCanContainer: {
    marginBottom: 50,
    zIndex: -1
  },

  trashCanRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});
