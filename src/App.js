import { Route, Switch } from "react-router-dom";
import FetchingData from "./Components/FetchingData";
import Home from "./Components/home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/form1" exact>
        <FetchingData />
      </Route>
      <Route path="/form2" exact>
        <FetchingData />
      </Route>
    </Switch>
  );
}

export default App;
