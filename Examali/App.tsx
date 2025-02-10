


import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/page/Home/Logo';
import Connexion from './src/page/Home/Connexion';
import Inscription from './src/page/Home/Inscription';
import Examalichoix from './src/page/Home/Examalichoix';
import Serie from './src/page/Home/Serie';
import TabsMaitre from './Screen/Tabs/TabsMaitre';

import Estes from './src/page/Home/Estes';

import Sujets from './Screen/Tabs/Sujets';
import Corriges from './Screen/Tabs/Corriges';

import AccueilMaitres from './src/page/Home/AccueilMaitres';
import AccueilMaitre from './src/page/Home/AccueilMaitre';
import Mathématique from './src/page/Home/Mathématique';
import Rédaction from './src/page/Home/Rédaction';
import Anglais from './src/page/Home/Anglais';
import Physiquechimie from './src/page/Home/Physiquechimie';
import Ecm from './src/page/Home/Ecm';
import Historique from './src/page/Home/Historique';
import Dicte from './src/page/Home/Dicte';
import Biologie from './src/page/Home/Biologie';
import Mathpdf from './Sujetspdf/Mathpdf';
import Physique from './src/page/Home/TSE/Physique';
import Chimie from './src/page/Home/TSE/Chimie';
import Biologies from './src/page/Home/TSE/Biologies';
import Anglaiss from './src/page/Home/TSE/Anglaiss';
import Philosophie from './src/page/Home/TSE/Philosophie';
import TSEXPMathematique from './src/page/Home/TSEXP/TSEXPMathematique';
import TSEXPBiologie from './src/page/Home/TSEXP/TSEXPBiologie';
import TSEXPAnglais from './src/page/Home/TSEXP/TSEXPAnglais';
import TSEXPPhysique from './src/page/Home/TSEXP/TSEXPPhysique';
import TSEXPPhilosophie from './src/page/Home/TSEXP/TSEXPPhilosophie';
import TSECOComptabilite from './src/page/Home/TSECO/TSECOComptabilite';
import TSECOGeographie from './src/page/Home/TSECO/TSECOGeographie';
import TSECOAnglais from './src/page/Home/TSECO/TSECOAnglais';
import TSECOEconomie from './src/page/Home/TSECO/TSECOEconomie';
import TSECOMathematique from './src/page/Home/TSECO/TSECOMathematique';
import TSECOPhilosophie from './src/page/Home/TSECO/TSECOPhilosophie';
import Mathematique from './src/page/Home/TSE/Mathematique';
import TSSPhilosophie from './src/page/Home/TSS/TSSPhilosophie';
import TSSHistoire from './src/page/Home/TSS/TSSHistoire';
import TSSAnglais from './src/page/Home/TSS/TSSAnglais';
import TSSGéographie from './src/page/Home/TSS/TSSGéographie';
import TSSSociologie from './src/page/Home/TSS/TSSSociologie';
import TSSMathematique from './src/page/Home/TSS/TSSMathematique';
import TLLAnglais from './src/page/Home/TLL/TLLAnglais';
import TLLFrançcais from './src/page/Home/TLL/TLLFrançais';
import TLLPhilosophie from './src/page/Home/TLL/TLLPhilosophie';
import TLLLinguistique from './src/page/Home/TLL/TLLLinguistique';
import TLLArabe from './src/page/Home/TLL/TLLArabe';
import TLLAllemand from './src/page/Home/TLL/TLLAllemand';
import TLLMathematique from './src/page/Home/TLL/TLLMathematique';
import TALFrançcais from './src/page/Home/TAL/TALFrançais';
import TALFrançais from './src/page/Home/TAL/TALFrançais';
import TALAnglais from './src/page/Home/TAL/TALAnglais';
import TALLinguistique from './src/page/Home/TAL/TALLinguistique';
import TALDramatique from './src/page/Home/TAL/TALDramatique';
import TALPlastique from './src/page/Home/TAL/TALPlastique';
import TALMathematique from './src/page/Home/TAL/TALMathematique';
import MathDEF20 from './Sujetspdf/MathDEF20';






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Logo" screenOptions={{ headerShown: false }}>
           <Stack.Screen name="Logo" component={Logo} />
           <Stack.Screen name="Connexion" component={Connexion} />
           <Stack.Screen name="Inscription" component={Inscription} />
           <Stack.Screen name="Examalichoix" component={Examalichoix} />
           <Stack.Screen name="Serie" component={Serie} />
           <Stack.Screen name="AccueilMaitres" component={AccueilMaitres} />
           <Stack.Screen name="TabsMaitre" component={TabsMaitre} />
           <Stack.Screen name="Estes" component={Estes} />
           <Stack.Screen name="Corrige" component={Corriges} />
           <Stack.Screen name="AccueilMaitre" component={AccueilMaitre} />
           <Stack.Screen name="Mathématique" component={Mathématique} />
           <Stack.Screen name="Rédaction" component={Rédaction} />
           <Stack.Screen name="Sujets" component={Sujets} />
           <Stack.Screen name="Anglais" component={Anglais} />
           <Stack.Screen name="Physiquechimie" component={Physiquechimie} />
           <Stack.Screen name="Ecm" component={Ecm} />
           <Stack.Screen name="Histoirique" component={Historique} />
           <Stack.Screen name="Dicte" component={Dicte} />
           <Stack.Screen name="Biologie" component={Biologie} />
           <Stack.Screen name="Mathpdf" component={Mathpdf} />
           <Stack.Screen name="Physique" component={Physique} />
           <Stack.Screen name="Chimie" component={Chimie} />
           <Stack.Screen name="Biologies" component={Biologies} />
           <Stack.Screen name="Anglaiss" component={Anglaiss} />
           <Stack.Screen name="Philosophie" component={Philosophie} />
           <Stack.Screen name="TSEXPMathematique" component={TSEXPMathematique} />
           <Stack.Screen name="TSEXPBiologie" component={TSEXPBiologie} />
           <Stack.Screen name="TSEXPAnglais" component={TSEXPAnglais} />
           <Stack.Screen name="TSEXPPhysique" component={TSEXPPhysique} />
           <Stack.Screen name="TSEXPPhilosophie" component={TSEXPPhilosophie} />
           <Stack.Screen name="TSECOComptabilite" component={TSECOComptabilite} />
           <Stack.Screen name="TSECOGeographie" component={TSECOGeographie} />
           <Stack.Screen name="TSECOAnglais" component={TSECOAnglais} />
           <Stack.Screen name="TSECOEconomie" component={TSECOEconomie} />
           <Stack.Screen name="TSECOMathematique" component={TSECOMathematique} />
           <Stack.Screen name="TSECOPhilosophie" component={TSECOPhilosophie} />
           <Stack.Screen name="Mathematique" component={Mathematique} />
           <Stack.Screen name="TSSPhilosophie" component={TSSPhilosophie} />
           <Stack.Screen name="TSSHistoire" component={TSSHistoire} />
           <Stack.Screen name="TSSAnglais" component={TSSAnglais} />
           <Stack.Screen name="TSSGéographie" component={TSSGéographie} />
           <Stack.Screen name="TSSSociologie" component={TSSSociologie} />
           <Stack.Screen name="TSSMathematique" component={TSSMathematique} />
           <Stack.Screen name="TLLAnglais" component={TLLAnglais} />
           <Stack.Screen name="TLLFrançais" component={TLLFrançcais} />
           <Stack.Screen name="TLLPhilosophie" component={TLLPhilosophie} />
           <Stack.Screen name="TLLLinguistique" component={TLLLinguistique} />
           <Stack.Screen name="TLLArabe" component={TLLArabe} />
           <Stack.Screen name="TLLAllemand" component={TLLAllemand} />
           <Stack.Screen name="TLLMathematique" component={TLLMathematique} />
           <Stack.Screen name="TALFrançais" component={TALFrançais} />
           <Stack.Screen name="TALAnglais" component={TALAnglais} />
           <Stack.Screen name="TALLinguistique" component={TALLinguistique} />
           <Stack.Screen name="TALDramatique" component={TALDramatique} />
           <Stack.Screen name="TALPlastique" component={TALPlastique} />
           <Stack.Screen name="TALMathematique" component={TALMathematique} />
           <Stack.Screen name="MathDEF20" component={MathDEF20} />
        </Stack.Navigator>

      </NavigationContainer>
     
  );
};

const styles = StyleSheet.create({});

export default App;
