import MainRouter from './MainRouter';
import './App.css';
import rootReducer from './stores/reducers/Index';
import InitialState from './stores/InitialState';
import { StateProvider } from './stores/services/StateProvider';


function App() {

  
  return (
    <StateProvider reducer={rootReducer} initialState={InitialState}>
      <div className="App">
        <header className="App-header">
          <MainRouter />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
