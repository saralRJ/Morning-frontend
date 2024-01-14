import logo from './logo.svg';
import './App.css';
import { Demo, WelcomeToReact } from './demo';
import { Navbar } from './component/Common/Navbar/Navbar.component';
import { Login } from './component/Auth/Login/Login.component';
import { Register } from './component/Auth/Register/Register.component';

function App() {
  return (
    <>
    {/*interpolation*/}
      <Navbar isLoggedIn={false}></Navbar>
      {/* <Demo></Demo>
      <WelcomeToReact/> */}
      <Register/>
      <Login></Login>
    </>
  );
}

export default App;
