import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <SignUp />
    </div>
  );
}

export default App;
