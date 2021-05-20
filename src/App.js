import Welcome from './Components/Welcome/Welcome';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Wall from './Components/Wall/Wall';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div id="app-wrapper">

      <BrowserRouter>

        <Header />

        <NavBar />

          <Route path='/' render={ () => <Welcome /> } />

          <Route path='/Profile' render={ () => <Profile /> } />

          <Route path='/Wall' render={ () => <Wall state={props.state}
                                                   dispatch={props.dispatch}/>} />

      </BrowserRouter>

    </div>
  );
}

export default App;
