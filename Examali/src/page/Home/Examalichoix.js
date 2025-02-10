import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Examalichoix = () => {
  const navigation = useNavigation(); // Déplacez useNavigation ici

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choisissez votre classes</Text>
      <View style={styles.containerR}>
              <Image
                style={styles.apprenantChild}
                resizeMode="cover"
                source={require("./../../../Asset/bonhomme.png")}
              />
            </View>
            <View style={styles.containerDEF}>
              <Image
                style={styles.DEF}
                resizeMode="cover"
                source={require("./../../../Asset/DEF.png")}
              />
            </View>
            <View style={styles.containerBAC}>
              <Image
                style={styles.BAC}
                resizeMode="cover"
                source={require("./../../../Asset/BAC.png")}
              />
            </View>
    </View>
  );
};

export default Examalichoix;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
      },
      text:{
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        fontWeight: 'bold',
      },
      apprenantChild: {
        height: 217,
        width:185,
        top: 20,
        alignSelf: 'center',
      },   

      DEF: {
        height: 184,
        width:191,
        top: 40,
        alignSelf: 'center',
      },
      BAC: {
        height: 184,
        width:191,
        top: 70,
        alignSelf: 'center',
      },
})