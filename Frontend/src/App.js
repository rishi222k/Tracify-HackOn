import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {Switch,Route} from "react-router-dom"
import CovidMap from "./Pages/CovidMap";
import ScrollTop from './ScrollTop'
// import Tables from "./Components/Tables";
import PersonDetails from "./Components/PersonDetails";

function App() {
  return (
    <div className="App">
    
    <ScrollTop/>
    <Switch>
    

      <Route path="/" exact>
      <Home/> 
      </Route>

      <Route path="/login">
      <Login/>
      </Route>

      <Route path="/signup">
      <Signup/> 
      </Route>

      <Route path="/transit">
      <CovidMap/> 
      </Route>

      <Route path="/travel/:id">
        <PersonDetails />
      </Route>

    </Switch>
    
    </div>
  );
}

export default App;
