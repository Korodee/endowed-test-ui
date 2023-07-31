import "./App.css";
import "./assets/styles/style.css";
import { MainContainer } from "./sections/main-container";
import Provider from './store/Provider'
function App() {
  return (
    <div className="App">
      <Provider>
      <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
