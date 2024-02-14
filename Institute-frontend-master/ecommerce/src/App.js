import logo from './logo.svg';
import './App.css';
import { combineReducer, combineReducers, createStore } from 'redux';
import { MyRoute } from './Component/Myroute';
import { Provider } from 'react-redux';
import { gameReducer } from './reducer/Game.reducer';
import countReducer from './reducer/countReducer';
import itemReducer from './reducer/Item.reducer';
import cartReducer from './reducer/Cart.reducer';
import { ToastContainer } from 'react-toastify';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  const persistConfig = {
    key: 'root',
    storage,
  }
 
  const combinedReducer = combineReducers({
    count: countReducer,
    game: gameReducer,
    item: itemReducer,
    cart: cartReducer
  })

  const persistedReducer = persistReducer(persistConfig, combinedReducer)

  const stores= createStore(persistedReducer) 
  let persistor = persistStore(stores)

  return (
    <>
    <Provider store={stores}>
    <PersistGate persistor={persistor}>
    <ToastContainer position ="top-center"/>
     <MyRoute/>
     </PersistGate>
    </Provider>
    </>
  );
}

export default App;
