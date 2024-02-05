import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { MyRoute } from './Component/Myroute';
import countReducer from './Component/countReducer';
import { Provider } from 'react-redux';

function App() {
  const my_store= createStore(countReducer)
  return (
    <>
    <Provider store={my_store}>

     <MyRoute/>
    </Provider>
    </>
  );
}

export default App;
