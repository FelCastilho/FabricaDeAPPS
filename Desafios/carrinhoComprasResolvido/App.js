import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import CartProvider from './src/Contexts/CartContexts';

export default function App() {
  return (
    <NavigationContainer>

      <CartProvider>

        <StatusBar backgroundColor='#fafafa' barStyle = 'dark-content'/>
        <Routes/>

      </CartProvider>

    </NavigationContainer>
  );
}
