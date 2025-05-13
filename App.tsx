


import React from 'react';
import { StyleSheet } from 'react-native';
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
import TALFrançais from './src/page/Home/TAL/TALFrançais';
import TALAnglais from './src/page/Home/TAL/TALAnglais';
import TALLinguistique from './src/page/Home/TAL/TALLinguistique';
import TALDramatique from './src/page/Home/TAL/TALDramatique';
import TALPlastique from './src/page/Home/TAL/TALPlastique';
import TALMathematique from './src/page/Home/TAL/TALMathematique';
import MathDEF20 from './Sujetspdf/MathDEF20';
import Math21 from './Sujetspdf/Math21';
import Math22 from './Sujetspdf/Math22';
import Math19 from './Sujetspdf/Math19';
import Physique19 from './Sujetspdf/Physique19';

import ProposExamali from './src/page/Home/ProposExamali';
import Condition from './src/page/Home/Condition';
import Politique from './src/page/Home/Politique';
import Chat from './src/page/Home/Chat';
import { Logoute } from './src/page/Home/Logoute';
import Testpdf from './src/page/Home/Testpdf';
import Physique21 from './Sujetspdf/Physique21';
import Physique22 from './Sujetspdf/Physique22';
import Anglais2019 from './Sujetspdf/Anglais2019';
import Anglais2020 from './Sujetspdf/Anglais2020';
import Anglais20 from './Sujetspdf/Anglais20';
import Anglais2021 from './Sujetspdf/Anglais2021';
import Anglais2022 from './Sujetspdf/Anglais2022';
import HistoireGeo2019 from './Sujetspdf/HistoireGeo2019';
import HistoireGeo2020 from './Sujetspdf/HistoireGeo2020';
import HistoireGeo2021 from './Sujetspdf/HistoireGeo2021';
import HistoireGeo2022 from './Sujetspdf/HistoireGeo2022';
import Biologie2019 from './Sujetspdf/Biologie2019';
import Biologie2020 from './Sujetspdf/Biologie2020';
import Biologie2021 from './Sujetspdf/Biologie2021';
import Biologie2022 from './Sujetspdf/Biologie2022';
import Ecm2019 from './Sujetspdf/Ecm2019';
import Ecm2020 from './Sujetspdf/Ecm2020';
import Ecm2021 from './Sujetspdf/Ecm2021';
import Ecm2022 from './Sujetspdf/Ecm2022';
import Redaction2019 from './Sujetspdf/Redaction2019';
import Redaction2020 from './Sujetspdf/Redaction2020';
import Redaction2021 from './Sujetspdf/Redaction2021';
import Redaction2022 from './Sujetspdf/Redaction2022';
import Dicte2019 from './Sujetspdf/Dicte2019';
import Dicte2020 from './Sujetspdf/Dicte2020';
import Dicte2021 from './Sujetspdf/Dicte2021';
import Redaction2009 from './SujetsRedaction/Redaction2009';
import Redaction2012 from './SujetsRedaction/Redaction2012';
import Redaction2014 from './SujetsRedaction/Redaction2014';
import Redaction2015 from './SujetsRedaction/Redaction015';
import Redaction2017 from './SujetsRedaction/Redaction2017';
import Redaction2016 from './SujetsRedaction/Redaction2016';
import Redaction2018 from './SujetsRedaction/REdaction2018';
import Dictee2012 from './SujetsDicteQuestion/Dicte2012';
import Dicte2014 from './SujetsDicteQuestion/Dicte2014';
import Dicte2012 from './SujetsDicteQuestion/Dicte2012';
import Dicte2018 from './SujetsDicteQuestion/Dicte2018';
import Ecm2012 from './SujetsECM/Ecm2012';
import Ecm2014 from './SujetsECM/Ecm2014';
import Ecm2015 from './SujetsECM/Ecm2015';
import Ecm2016 from './SujetsECM/Ecm2016';
import Ecm2017 from './SujetsECM/Ecm2017';
import Ecm2018 from './SujetsECM/Ecm2018';
import Mathematique2010 from './Sujetspdf/Mathematique2010';
import Mathematique2011 from './Sujetspdf/Mathematique2011';
import Physique2010 from './SujetsPysiqueChimie/Physique2010';
import Physique2011 from './SujetsPysiqueChimie/Physique2011';
import Physique2012 from './SujetsPysiqueChimie/Physique2012';
import Physique2013 from './SujetsPysiqueChimie/Physique2013';
import Physique2014 from './SujetsPysiqueChimie/Physique2014';
import Physique2015 from './SujetsPysiqueChimie/Physique2015';
import Physique2016 from './SujetsPysiqueChimie/Physique2016';
import Physique2017 from './SujetsPysiqueChimie/Physique2017';
import Physique2018 from './SujetsPysiqueChimie/Physique2018';
import Anglais2012 from './SujetsAnglais/Anglais2012';
import Anglais2015 from './SujetsAnglais/Anglais2015';
import Anglais2016 from './SujetsAnglais/Anglais2016';
import Anglais2017 from './SujetsAnglais/Anglais2017';
import Anglais2018 from './SujetsAnglais/Anglais2018';
import Histoire2012 from './SujetsHistoiregéo/Histoire2012';
import Histoire2014 from './SujetsHistoiregéo/Histoire2014';
import Histoire2015 from './SujetsHistoiregéo/Histoire2015';
import histoire2016 from './SujetsHistoiregéo/Histoire2016';
import Histoire2017 from './SujetsHistoiregéo/histoire2017';
import Histoire2018 from './SujetsHistoiregéo/Histoire2018';
import Biologie2012 from './SujetsBiologie/Biologie2012';
import Biologie2014 from './SujetsBiologie/Biologie2014';
import Biologie2015 from './SujetsBiologie/Biologie2015';
import Biologie2016 from './SujetsBiologie/Biologie2016';
import Biologie2018 from './SujetsBiologie/Biologie2018';
import Biologie2017 from './SujetsBiologie/Biologie2017';
import Histoire2016 from './SujetsHistoiregéo/Histoire2016';
import Anglais2024 from './SujetsAnglais/Anglais2024';
import Dicte2024 from './SujetsDicteQuestion/Dicte2024';
import Ecm2024 from './SujetsECM/Ecm2024';
import Histoire2024 from './SujetsHistoiregéo/Histoire2024';
import Physique2024 from './SujetsPysiqueChimie/Physique2024';
import Redaction2024 from './SujetsRedaction/Redaction2024';
import Biologie2024 from './SujetsBiologie/Biologie2024';
import Anglais2023 from './SujetsAnglais/Anglais2023';
import Ecm2023 from './SujetsECM/Ecm2023';
import Dicte2023 from './SujetsDicteQuestion/Dicte2023';
import Histoire2023 from './SujetsHistoiregéo/Histoire2023';
import Physique2023 from './SujetsPysiqueChimie/Physique2023';
import Redaction2023 from './SujetsRedaction/Redaction2023';
import Biologie2023 from './SujetsBiologie/Biologie2023';





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
           <Stack.Screen name="Math21" component={Math21} />
           <Stack.Screen name="Math22"component={Math22}/>
           <Stack.Screen name="Math19"component={Math19}/>
           <Stack.Screen name="Mathematique2010"component={Mathematique2010}/>
           <Stack.Screen name="Mathematique2011"component={Mathematique2011}/>


           <Stack.Screen name="Physique19"component={Physique19}/>
           <Stack.Screen name="ProposExamali"component={ProposExamali}/>
           <Stack.Screen name="Condition"component={Condition}/>
           <Stack.Screen name="Politique"component={Politique}/>
           <Stack.Screen name="Chat"component={Chat}/>
           <Stack.Screen name="Logoute"component={Logoute}/>
           <Stack.Screen name="Testpdf"component={Testpdf}/>
           <Stack.Screen name="Physique21"component={Physique21}/>
           <Stack.Screen name="Physique22"component={Physique22}/>
           <Stack.Screen name="Physique2010"component={Physique2010}/>
           <Stack.Screen name="Physique2011"component={Physique2011}/>
           <Stack.Screen name="Physique2012"component={Physique2012}/>
           <Stack.Screen name="Physique2013"component={Physique2013}/>
           <Stack.Screen name="Physique2014"component={Physique2014}/>
           <Stack.Screen name="Physique2015"component={Physique2015}/>
           <Stack.Screen name="Physique2016"component={Physique2016}/>
           <Stack.Screen name="Physique2017"component={Physique2017}/>
           <Stack.Screen name="Physique2018"component={Physique2018}/>
           <Stack.Screen name="Physique2024"component={Physique2024}/>
           <Stack.Screen name="Physique2023"component={Physique2023}/>

           <Stack.Screen name="Anglais2019"component={Anglais2019}/>
           <Stack.Screen name="Anglais20"component={Anglais20}/>
           <Stack.Screen name="Anglais2021"component={Anglais2021}/>
           <Stack.Screen name="Anglais2022"component={Anglais2022}/>
           <Stack.Screen name="Anglais2012"component={Anglais2012}/>
           <Stack.Screen name="Anglais2015"component={Anglais2015}/>
           <Stack.Screen name="Anglais2016"component={Anglais2016}/>
           <Stack.Screen name="Anglais2017"component={Anglais2017}/>
           <Stack.Screen name="Anglais2018"component={Anglais2018}/>
           <Stack.Screen name="Anglais2024"component={Anglais2024}/>
           <Stack.Screen name="Anglais2023"component={Anglais2023}/>


           <Stack.Screen name="HistoireGeo2019"component={HistoireGeo2019}/>
           <Stack.Screen name="HistoireGeo2020"component={HistoireGeo2020}/>
           <Stack.Screen name="HistoireGeo2021"component={HistoireGeo2021}/>
           <Stack.Screen name="HistoireGeo2022"component={HistoireGeo2022}/>
           <Stack.Screen name="Histoire2012"component={Histoire2012}/>
           <Stack.Screen name="Histoire2014"component={Histoire2014}/>
           <Stack.Screen name="Histoire2015"component={Histoire2015}/>
           <Stack.Screen name="Histoire2016"component={Histoire2016}/>
           <Stack.Screen name="Histoire2017"component={Histoire2017}/>
           <Stack.Screen name="Histoire2018"component={Histoire2018}/>
           <Stack.Screen name="Histoire2024"component={Histoire2024}/>
           <Stack.Screen name="Histoire2023"component={Histoire2023}/>


           
           <Stack.Screen name="Biologie2019"component={Biologie2019}/>
           <Stack.Screen name="Biologie2020"component={Biologie2020}/>
           <Stack.Screen name="Biologie2021"component={Biologie2021}/>
           <Stack.Screen name="Biologie2022"component={Biologie2022}/>
           <Stack.Screen name="Biologie2012"component={Biologie2012}/>
           <Stack.Screen name="Biologie2014"component={Biologie2014}/>
           <Stack.Screen name="Biologie2015"component={Biologie2015}/>
           <Stack.Screen name="Biologie2016"component={Biologie2016}/>
           <Stack.Screen name="Biologie2017"component={Biologie2017}/>
           <Stack.Screen name="Biologie2018"component={Biologie2018}/>
           <Stack.Screen name="Biologie2024"component={Biologie2024}/>
           <Stack.Screen name="Biologie2023"component={Biologie2023}/>

           <Stack.Screen name="Ecm2019"component={Ecm2019}/>
           <Stack.Screen name="Ecm2020"component={Ecm2020}/>
           <Stack.Screen name="Ecm2021"component={Ecm2021}/>
           <Stack.Screen name="Ecm2022"component={Ecm2022}/>
           <Stack.Screen name="Ecm2012"component={Ecm2012}/>
           <Stack.Screen name="Ecm2014"component={Ecm2014}/>
           <Stack.Screen name="Ecm2015"component={Ecm2015}/>
           <Stack.Screen name="Ecm2016"component={Ecm2016}/>
           <Stack.Screen name="Ecm2017"component={Ecm2017}/>
           <Stack.Screen name="Ecm2018"component={Ecm2018}/>
           <Stack.Screen name="Ecm2024"component={Ecm2024}/>
           <Stack.Screen name="Ecm2023"component={Ecm2023}/>


           <Stack.Screen name="Redaction2019"component={Redaction2019}/>
           <Stack.Screen name="Redaction2020"component={Redaction2020}/>
           <Stack.Screen name="Redaction2021"component={Redaction2021}/>
           <Stack.Screen name="Redaction2022"component={Redaction2022}/>
           <Stack.Screen name="Redaction2009"component={Redaction2009}/>
           <Stack.Screen name="Redaction2012"component={Redaction2012}/>
           <Stack.Screen name="Redaction2014"component={Redaction2014}/>
           <Stack.Screen name="Redaction2015"component={Redaction2015}/>
           <Stack.Screen name="Redaction2017"component={Redaction2017}/>
           <Stack.Screen name="Redaction2016"component={Redaction2016}/>
           <Stack.Screen name="Redaction2018"component={Redaction2018}/>
           <Stack.Screen name="Redaction2024"component={Redaction2024}/>
           <Stack.Screen name="Redaction2023"component={Redaction2023}/>


           <Stack.Screen name="Dicte2019"component={Dicte2019}/>
           <Stack.Screen name="Dicte2020"component={Dicte2020}/>
           <Stack.Screen name="Dicte2021"component={Dicte2021}/>
           <Stack.Screen name="Dicte2012"component={Dicte2012}/>
           <Stack.Screen name="Dicte2014"component={Dicte2014}/>
           <Stack.Screen name="Dicte2018"component={Dicte2018}/>
           <Stack.Screen name="Dicte2024"component={Dicte2024}/>
           <Stack.Screen name="Dicte2023"component={Dicte2023}/>
        </Stack.Navigator>

      </NavigationContainer>
     
  );
};

const styles = StyleSheet.create({});

export default App;
