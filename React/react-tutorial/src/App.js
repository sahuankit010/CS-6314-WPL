// import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Profile from "./components/Profile";
import './App.css';

function App() {
  return (
    <div className="App">
        <Welcome
            message = "Hello"
            messageCode= "1"
        />
        <Profile firstName="Ankit" lastName="Sahu"/>
    </div>
  );
}

export default App;
