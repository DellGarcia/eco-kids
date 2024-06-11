import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View} from '@/components/Themed';

const logo = require('../assets/images/app/logo.png');
const lixeiraAzul = require('../assets/images/app/lata-azul.png');
const lixeiraVermelha = require('../assets/images/app/lata-vermelha.png');
const lixeiraAmarela = require('../assets/images/app/lata-amarela.png');
const lixeiraMarrom = require('../assets/images/app/lata-marrom.png');
const lixeiraVerde = require('../assets/images/app/lata-verde.png');

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Text style={styles.title}>Conheça o Eco-Kids</Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={styles.logo_row}>
          <Image source={logo} style={styles.logo}/>
        </View>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        <Text style={styles.text}>
          Eco-Kids é um app educacional sobre reciclagem ele funciona como um jogo onde você deve selecionar o tipo de lixo e a lata de lixo correta para fazer pontos.
        </Text>

        <Text style={styles.text}>
          Fique tranquilo aqui você pode aprender tudo que precisa saber sobre os tipos de diferentes de lixo e lixeiras, vamos lá?
        </Text>

        <Text style={styles.text}>
          O lixo pode ser classificado em 5 diferentes categorias para poder ser reciclado de maneira adequada, as cartegorias são:
          Papel, Plastico, Metal, Vidro e Organico 
        </Text>

        <View style={styles.image_row}>
          <Image source={lixeiraAzul} style={styles.trashcan}/>
          <Image source={lixeiraVermelha} style={styles.trashcan}/>
          <Image source={lixeiraAmarela} style={styles.trashcan}/>
          <Image source={lixeiraVerde} style={styles.trashcan}/>
          <Image source={lixeiraMarrom} style={styles.trashcan}/>
        </View>

        <Text style={styles.text}>
          Agora que conhecemos as lixeiras vamos aprender o que jogar em cada uma delas.
        </Text>

        <Text style={[styles.text, styles.h1]}>
          1. Lixeira Azul
        </Text>

        <View style={styles.image_center}>
          <Image source={lixeiraAzul} style={styles.trashcan2}/>
        </View>

        <Text style={styles.text}>
          Esta lixeira é destinada para os diversos tipos de papeis e papelão.
          Exemplo: Jornais, Caixas, Folhas de Caderno, Cartolina e outros.
        </Text>

        <Text style={[styles.text, styles.h1]}>
          2. Lixeira Vermelha
        </Text>
        
        <View style={styles.image_center}>
          <Image source={lixeiraVermelha} style={styles.trashcan2}/>
        </View>

        <Text style={styles.text}>
          A lixeira vermelha é para o descarte de plásticos, como tampas, garrafas pet, embalagens, escovas de dente, tubo de creme dental, cds e dvds, etc.
        </Text>

        <Text style={[styles.text, styles.h1]}>
          3. Lixeira Amarela
        </Text>

        <View style={styles.image_center}>
          <Image source={lixeiraAmarela} style={styles.trashcan2}/>
        </View>

        <Text style={styles.text}>
          Amarelo é a cor da lixeira onde devem ser depositados materiais de metal, como latas, talheres, panelas, fios, peças de geladeira, pregos e similares.
        </Text>

        <Text style={[styles.text, styles.h1]}>
          4. Lixeira Verde
        </Text>

        <View style={styles.image_center}>
          <Image source={lixeiraVerde} style={styles.trashcan2}/>
        </View>

        <Text style={styles.text}>
          Esta lixeira é destinada para os diversos tipos de papeis e papelão.
          Exemplo: Jornais, Caixas, Folhas de Caderno, Cartolina e outros.
        </Text>

        <Text style={[styles.text, styles.h1]}>
          5. Lixeira Marrom
        </Text>

        <View style={styles.image_center}>
          <Image source={lixeiraMarrom} style={styles.trashcan2}/>
        </View>

        <Text style={styles.text}>
          Na lixeira marrom devem ser descartados os resíduos orgânicos, como os restos de alimentos.
        </Text>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignSelf: 'center',
  },

  text: {
    margin: 10,
    textAlign: 'justify'
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 30
  },

  logo_row: {
    alignSelf: 'center'
  },

  image_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },

  trashcan: {
    width: 50,
    height: 50,
  },

  trashcan2: {
    width: 90,
    height: 90,
  },

  h1: {
    fontWeight: 'bold',
    fontSize: 18
  },

  image_center: {
    alignItems: 'center'
  }
});
