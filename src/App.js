import './App.scss';
import Main from './comps/Main'; 
import Serve from './comps/Serve'; 
import Support from './comps/Support';

function App() {
  return (
    <div className="App">
      <div class="menu-bar">
        <a href="#home">Home</a>
        <a href="#serve">Services</a>
        <a href="#support">Support</a>
      </div>

      <Main />
      <Serve />
      <Support />
    </div>
  );
}

export default App;
