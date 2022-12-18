import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App rounded border border-1 border-light">
      <Weather defaultCity="Stockholm" />
      <footer className='footer'>
      <a href="https://github.com/helgamelnyk/react-weather-app" target="" className="text-decoration-none">Created by Olha Melnyk</a>
      </footer>
    </div>
  );
}

export default App;
