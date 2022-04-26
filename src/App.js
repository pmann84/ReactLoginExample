import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './hooks/useToken';

function App() {
  const { token, removeToken, setToken } = useToken();

  console.log("Checking token...", token);
  if (!token) {
    console.log("no token... please login...");
    return <Login setToken={setToken} />
  }

  console.log("Token granted ", token);
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/dashboard" className={isActive => 'navlink' + (isActive ? ' navlinkactive' : '')}>Dashboard</NavLink>
        <NavLink to="/preferences" className={isActive => 'navlink' + (isActive ? ' navlinkactive' : '')}>Preferences</NavLink>
        { token && <NavLink to="/dashboard" onClick={() => {removeToken()}} className={isActive => 'navlink' + (isActive ? ' navlinkactive' : '')}>Logout</NavLink> }
        { !token && <NavLink to="/dashboard" className={isActive => 'navlink' + (isActive ? ' navlinkactive' : '')}>Login</NavLink> }
      </nav>
      <div className='app-wrapper'>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
