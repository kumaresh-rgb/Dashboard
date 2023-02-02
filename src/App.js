
import './App.css';

import Maindash from './components/Maindash/Maindash';
import Rightside from './components/Rightside/Rightside';



import Sidebar from './components/Sidebarmain/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App-glass">
      <Sidebar/>
      <Maindash/>
      <Rightside/>
      </div>
  
    </div>
  );
}

export default App;
