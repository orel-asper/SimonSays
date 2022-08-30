import React, { useState } from 'react';
import Box from './src/components/Box';
import GlobalStyle from './src/theme/GlobalStyle';
import { SafeAreaView, StatusBar } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import useEffectOnce from './src/hooks/useEffectOnce';
import RootStack from './src/root/RootStack';
import GetSvg from './src/components/GetSvg';


let mainColor = '#33CCCC';

const App: React.FC<any> = React.memo(() => {
  const [loading, setLoading] = useState(false)
  useEffectOnce(() => {
    (async () => {
      try {
        setLoading(true);
        await SystemNavigationBar.setNavigationColor(mainColor, 'light');
        setLoading(false);
      } catch (error) {
        console.log(error, 'app error');
      }
    })()
  })


  return (
    <SafeAreaView style={{ backgroundColor: mainColor }}>
      <StatusBar backgroundColor={mainColor} />
      <Box style={GlobalStyle.container} >
        {!loading ?
          <RootStack />
          :
          <GetSvg id={'SplashScreen'} />}
      </Box>
    </SafeAreaView>
  );
});


export default App;

