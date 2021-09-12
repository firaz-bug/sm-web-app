import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/SignIn" component={SignIn} /> 
        <Route path="/SignUp" component={SignUp} />
      </switch> 
      </Router>
      </header>
    </div>
  );
}

export default App;
