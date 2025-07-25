import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Image, Text, ActivityIndicator } from 'react-native';
import Pdf from 'react-native-pdf';
import { useNavigation } from '@react-navigation/native';

const MathematiqueTexp2020 = () => {
  const navigation = useNavigation();
  const [showPdf, setShowPdf] = useState(false);

  // Lancer le chargement du PDF après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPdf(true);
    }, 2000); // 2 secondes

    return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
  }, []);

  const source = {
    uri: Platform.select({
      ios: 'bundle-assets://pdf/tsexpba2020.pdf',
      android: 'bundle-assets://pdf/tsexpba2020.pdf',
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Math du bac Texp 2020</Text>
      </View>

      {showPdf ? (
        <Pdf
          source={source}
          style={styles.pdf}
          onError={(error) => {
            console.log('Erreur lors du chargement du PDF:', error);
          }}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Chargement du document...</Text>
        </View>
      )}
    </View>
  );
};

export default MathematiqueTexp2020;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  pdf: {
    flex: 1,
    margin: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});
