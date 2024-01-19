import logo from './logo.svg';
import './App.css';
import { Demo, WelcomeToReact } from './demo';
import { Navbar } from './component/Common/Navbar/Navbar.component';
import { Login } from './component/Auth/Login/Login.component';
import { Register } from './component/Auth/Register/Register.component';
import { Myroutes } from './Myroute';

function App() {
  return (
    <>
    {/*interpolation*/}
      {/* <Demo></Demo>
      <WelcomeToReact/> */}
      {/* <Register/>
      <Login></Login> */}
      <Myroutes/>
    </>
  );
}

export default App;
