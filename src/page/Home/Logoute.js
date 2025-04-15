import auth from '@react-native-firebase/auth';
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
                routes: [{ name: 'Login' }],
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