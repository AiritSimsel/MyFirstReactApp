import './App.css';
import {AddNumber} from './components/Increment';
import {Header} from './components/Header';
import {EnterName} from './components/EnterName';
import {Offices} from './components/RROffices';
import {Time} from './components/Clock';
import {Color} from './components/ChangeColor';
import {Greeting} from './components/Greeting';


let currentTime = new Date().toLocaleTimeString();
let currentDate = new Date().toLocaleDateString();

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header page='https://github.com/AiritSimsel'/>
      </header>
      <body>           
      <><AddNumber/></>
      <><EnterName/></>
      <><Greeting/></>
      <span className="time">{currentTime}</span>   
      <span className="date">{currentDate}</span>
      <><Offices company = 'Reverse Resources' country = {['Estonia', 'Bangladesh']} city = {['Tallinn', 'Tartu', 'Dhaka']}/></>
      <><Time /></>
      <span><Color/></span>
      </body>
    </div>
  );
}

export default App;
