import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/login/Login';
import Messages from "./components/messages/Messages";

function App() {
  return (
    <div className="App">
      {/*<Login/> */}
      <Navbar />
      <Messages/>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
