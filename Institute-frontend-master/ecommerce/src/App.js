import logo from './logo.svg';
import './App.css';
import { combineReducer, combineReducers, createStore } from 'redux';
import { MyRoute } from './Component/Myroute';
import { Provider } from 'react-redux';
import { gameReducer } from './reducer/Game.reducer';
import countReducer from './reducer/countReducer';
import itemReducer from './reducer/Item.reducer';
import cartReducer from './reducer/Cart.reducer';

function App() {
 
  const combinedReducer = combineReducers({
    count: countReducer,
    game: gameReducer,
    item: itemReducer,
    cart: cartReducer
  })

  const stores= createStore(combinedReducer)
  return (
    <>
    <Provider store={stores}>

     <MyRoute/>
    </Provider>
    </>
  );
}

export default App;
