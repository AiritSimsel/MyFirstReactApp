import './App.css';
import AddNumber from './components/Increment';
import Header from './components/Header';
import EnterName from './components/EnterName';
import Offices from './components/RROffices';
import Time from './components/Clock';
import Color from './components/ChangeColor';


let currentTime = new Date().toLocaleTimeString();
let currentDate = new Date().toLocaleDateString();

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header page='https://github.com/AiritSimsel'/>
      </header>
      <body>           
      <p><AddNumber/></p>
      <p><EnterName/></p>
      <span className="time">{currentTime}</span>   
      <span className="date">{currentDate}</span>
      <p><Offices company = 'Reverse Resources' country = {['Estonia', 'Bangladesh']} city = {['Tallinn', 'Tartu', 'Dhaka']}/></p>
      <p><Time/></p>
      <span><Color/></span>
      </body>
    </div>
  );
}

export default App;
