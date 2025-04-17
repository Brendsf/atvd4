import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Avatar, SearchBar } from '@rneui/themed'; 
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-ratings';

function MenuClinica() {
  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
      <Avatar
        size={120}
        rounded
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GkkVbXh_XOrvxqmbXtL_Vb-OVaaO_Whh7A&s',
        }}
      />
      </View>
      <Text style={styles.legendaAvatar}>Welcome Cinderela!</Text>

      <SearchBar
        placeholder="Pesquisar"
        round
        lightTheme
        onChangeText={updateSearch}
        containerStyle={styles.barraPesquisa}
      />

      <View style ={styles.botoes}>
        <Button icon={<Fontisto name="doctor" size={50} color="white" />}
         iconPosition='top' title="Consultas"
         buttonStyle={styles.botao}
         titleStyle={styles.legendaBotao}/>
        <Button icon={<FontAwesome5 name="tooth" size={50} color="white" />}
         iconPosition='top' title="Dentista"
         buttonStyle={styles.botao}
         titleStyle={styles.legendaBotao}/>
        <Button icon={<FontAwesome name="heartbeat" size={50} color="white" />}
         iconPosition='top' title="Cardiologista"
         buttonStyle={styles.botao}
         titleStyle={styles.legendaBotao}/>
        <Button icon={<FontAwesome5 name="hospital" size={50} color="white" />}
         iconPosition='top' title="Hospital"
         buttonStyle={styles.botao}
         titleStyle={styles.legendaBotao}/>
        <Button icon={<MaterialCommunityIcons name="car-emergency" size={50} 
        color="white" />} iconPosition='top' title="Emergência"
        buttonStyle={styles.botao}
        titleStyle={styles.legendaBotao}/>    
        <Button icon={<Fontisto name="laboratory" size={50} color="white" />} 
        iconPosition='top' title="Laboratório"
        buttonStyle={styles.botao}
        titleStyle={styles.legendaBotao}/>
      </View>

      <View style={styles.topDoutores}>
        <Text style={styles.legendaAvatar}>Top Doutores</Text>

        <View style={styles.doutor}>
          <Avatar size={80} rounded source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-aDG10L0cKbpukdLyHHgGjLMXCoSwthDhg&s' }} />
          <View>
            <Text style={styles.nomeDoutores}>Dr. Tiana</Text>
            <Text style={styles.descriDoutores}>Cardiologista</Text>
            <Rating type="star" ratingCount={5} imageSize={20} readonly startingValue={4.5} />
          </View>
        </View>

        <View style={styles.doutor}>
          <Avatar size={80} rounded source={{ uri: 'https://64.media.tumblr.com/a9b744898c0be9a7b94e6002541157cb/tumblr_o1820wyTsO1ucsrqio1_250.png' }} 
          />
          <View>
            <Text style={styles.nomeDoutores}>Dr. Bela</Text>
            <Text style={styles.descriDoutores}>Pediatra</Text>
            <Rating type="star" ratingCount={5} imageSize={20} readonly startingValue={4.4} />
          </View>
        </View>

        <View style={styles.doutor}>
          <Avatar size={80} rounded source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUxEal6JBpPwa5F81Uyd06P2FrGwv-CEogQ&s' }} />
          <View>
            <Text style={styles.nomeDoutores}>Dr. Elsa</Text>
            <Text style={styles.descriDoutores}>Pediatra</Text>
            <Rating type="star" ratingCount={5} imageSize={20} readonly startingValue={4.8} />
          </View>
        </View>
      </View>

      <View style={styles.rodape}>
        <View>
          <FontAwesome5 name="home" size={30} color="#f28bbd" />
          <Text style={styles.legendaRodape}>Home</Text>
        </View>
        <View>
          <FontAwesome name="stethoscope" size={30} color="#f28bbd"/>
          <Text style={styles.legendaRodape}>Doutores</Text>
        </View>
        <View>
          <FontAwesome5 name="calendar-check" size={30} color="#f28bbd"/>
          <Text style={styles.legendaRodape}>Agendamento</Text>
        </View>
        <View>
          <FontAwesome name="user" size={30} color="#f28bbd" />
          <Text style={styles.legendaRodape}>Perfil</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
    padding: 16,
  },
  avatar: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  legendaAvatar:{
    fontSize: 20,
    color: '#ec407a',
    fontWeight: 'bold',
  },
  barraPesquisa: {
    marginBottom: 20,
  },
  botoes:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  botao:{
    backgroundColor: '#f48fb1',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  legendaBotao:{
    fontSize: 14,
    color: 'white',
  },
  topDoutores:{
    marginTop: 40,
    marginBottom: 20,
  },
    nomeDoutores:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ec407a',
  },
  descriDoutores:{
    fontSize: 14,
    color: '#f48fb1',
    marginBottom: 10,
  },

  doutor:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  rodape:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    width: '100%',

  },
  legendaRodape:{
    fontSize: 12,
    color: '#f28bbd',
  }
});

export default MenuClinica;
