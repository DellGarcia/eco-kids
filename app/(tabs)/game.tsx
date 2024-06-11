import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import { View } from '@/components/Themed';
import { IconButton } from '@/components/IconButton';
import Draggable from 'react-native-draggable';
import { useState } from 'react';

const lixeiraAzul = require('../../assets/images/app/lata-azul.png');
const lixeiraVermelha = require('../../assets/images/app/lata-vermelha.png');
const lixeiraAmarela = require('../../assets/images/app/lata-amarela.png');
const lixeiraMarrom = require('../../assets/images/app/lata-marrom.png');
const lixeiraVerde = require('../../assets/images/app/lata-verde.png');

const caixa = require('../../assets/images/app/caixa.png');
const pet = require('../../assets/images/app/pet.png');
const maca = require('../../assets/images/app/maca.png');
const garrafa = require('../../assets/images/app/garrafa.png');
const lacre = require('../../assets/images/app/lacre-refri.png');
const guardanapo = require('../../assets/images/app/guardanapo.png');




export default function TabOneScreen() {
  const [points, setPoints] = useState(0);

  const [hideCaixa, setHideCaixa] = useState(false);
  const [hidePet, setHidePet] = useState(false);
  const [hideMaca, setHideMaca] = useState(false);
  const [hideGarrafa, setHideGarrafa] = useState(false);
  const [hideLacre, setHideLacre] = useState(false);
  const [hideGuardanapo, setHideGuardanapo] = useState(false);

  let lixo = '';
  let lixeira = '';
  let hideItem: (bool: boolean)=>void;

  const handleTrashcanSelection = (trashcanType: string) => {
    lixeira = trashcanType;

    if (lixo != '') {
      handleCheck();
    }
  }

  const handleTrashSelection = (trashType: string, func: (bool: boolean)=>void) => {
    lixo = trashType;
    hideItem = func;

    if (lixeira != '') {
      handleCheck();
    }
  }

  const handleCheck = () => {
    console.log(lixo == lixeira)
    if(lixo == lixeira) {
      setPoints(points+1);
      hideItem(true)
    }

    lixo = ''
    lixeira = ''
  }

  return (
    <View style={styles.container}>
      
      
      <View style={styles.itemsContainer}>
        <Text style={styles.points}>Pontos: {points}</Text>
        <View style={styles.items}>
          <IconButton icon={pet} selected={false} onPress={() => handleTrashSelection('plastico', setHidePet)} isHidden={hidePet}/>
          <IconButton icon={caixa} selected={false} onPress={() => handleTrashSelection('papel', setHideCaixa)} isHidden={hideCaixa}/>
          <IconButton icon={maca} selected={false} onPress={() => handleTrashSelection('organico', setHideMaca)} isHidden={hideMaca}/>
          <IconButton icon={lacre} selected={false} onPress={() => handleTrashSelection('metal', setHideLacre)} isHidden={hideLacre}/>
          <IconButton icon={garrafa} selected={false} onPress={() => handleTrashSelection('vidro', setHideGarrafa)} isHidden={hideGarrafa}/>
          <IconButton icon={guardanapo} selected={false} onPress={() => handleTrashSelection('papel', setHideGuardanapo)} isHidden={hideGuardanapo}/>
        </View>
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
    
    //marginTop: 50,
    width: '100%'
  },

  points: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
