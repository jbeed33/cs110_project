import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/login/Login';
import AdminPanel from "./components/admin/AdminPanel";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Navbar />
      {/* <Dashboard /> */}
      <AdminPanel/>
    </div>
  );
}

export default App;
