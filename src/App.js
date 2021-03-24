import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import DashBoard from './components/dashboard/DashBoard'
import DogDetail from './components/dogs/DogDetail'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import CreateDog from './components/dogs/CreateDog'
// <Switch makes sure only one route is loaded at a time
// Route exact make its load homepage when stricly '/' is on the path

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/project/:id' component={DogDetail} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateDog} />

        </Switch>
        <div className="content">
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
