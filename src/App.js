import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Skillspage from './pages/Skillspage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <Homepage/>
        )} />

        <Route exact path="/skills" render={() => (
          <Skillspage/>
        )} />

        <Route exact path="/login" render={() => (
          <Loginpage/>
        )} />

        <Route exact path="/register" render={() => (
          <Registerpage />
        )} />
      </Switch>
    </div>
  )
};

export default App;