// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
import Profile from "./components/Profile";
import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">

        <Profile firstName="Ankit" lastName="Sahu"/>
        <Counter/>
    </div>
  );
}

export default App;
