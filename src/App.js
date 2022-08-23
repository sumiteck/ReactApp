import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
const [cartIsShown, setCartIsShown] = useState(false);

function showCartHandler(){
  setCartIsShown(true);

}

function hideCartHandler(){
  setCartIsShown(false);

}

  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
