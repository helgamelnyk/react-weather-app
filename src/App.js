
import './App.css';

function App() {
  return (
    <div className="App rounded border border-1 border-light">
      <form className="pt-3 d-flex justify-content-center">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn w-70" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1 className="ms-4 text-danger text-center">Kyiv</h1>
        <ul className="list-grop">
          <li className="list-group-item text-center fs-4">Monday 15:30</li>
          <li className="list-group-item fs-4">Snow</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature ms-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-snow"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
            </svg>
            <div className="mb-4 mt-3 fs-4">
              <strong>-3</strong>
              <span className="units">
                <a href="/" className=" text-decoration-none">
                  
                  °C
                </a>
                |
                <a href="/" className=" text-decoration-none">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="list-grop fs-5">
            <li className="list-group-item">
              Humidity: 70%
            </li>
            <li className="list-group-item">Wind: 4</li>
          </ul>
        </div>
      </div>
      <a href="https://github.com/helgamelnyk/react-weather-app" target="" className="text-decoration-none">Created by Olha Melnyk</a>
    </div>
  );
}

export default App;
