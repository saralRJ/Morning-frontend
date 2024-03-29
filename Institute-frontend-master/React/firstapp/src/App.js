import logo from './logo.svg';
import './App.css';
import { Demo, WelcomeToReact } from './demo';
import { Navbar } from './component/Common/Navbar/Navbar.component';
import { Login } from './component/Auth/Login/Login.component';

function App() {
  return (
    <>
    {/*interpolation*/}
      <Navbar isLoggedIn={false}></Navbar>
      {/* <Demo></Demo>
      <WelcomeToReact/> */}
      <Login></Login>
    </>
  );
}

export default App;
