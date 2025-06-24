
import { Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export const Logoute = (navigation) => {
  Alert.alert(
    'Déconnexion',
    'Voulez-vous vraiment vous déconnecter ?',
    [
      {
        text: 'Annuler',
        style: 'cancel',
      },
      {
        text: 'Déconnecter',
        onPress: async () => {
          try {
            await auth().signOut();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Connexion' ,
                  params: { 
                    screen: 'Connexion' // Si imbriqué dans un Stack
                  }
                }],
              })
            );
          } catch (error) {
            Alert.alert('Erreur', error.message);
          }
        },
      },
    ],
    { cancelable: false }
  );
};