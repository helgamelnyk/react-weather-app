import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div>
    <div className="App border rounded">
      <Weather defaultCity="Stockholm" />
    </div>
    <div>
 <footer>
      <a href="https://github.com/helgamelnyk/react-weather-app" target="" className="text-decoration-none d-flex justify-content-center footer">Created by Olha Melnyk</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
