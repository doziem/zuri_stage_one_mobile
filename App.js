
import { SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './screens/WebViewScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{
              headerTitle: ""
            }}
          />
          <Stack.Screen name="WebView" component={WebViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



