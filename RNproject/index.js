import { registerRootComponent } from 'expo';

// 0 -> Intro
// 1 -> Intials About React-Native Description 
// 2 -> FlexBox 
// 3 -> component wise full implementation of App1

import App from './App1';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
