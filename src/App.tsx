import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <Routes />
        </View>
    </NavigationContainer>
);

export default App;
// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
