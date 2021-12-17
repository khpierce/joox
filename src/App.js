import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/Sidebar/Sidebar';
import MusicPlayer from './Component/MusicPlayer/MusicPlayer';
import MainPage from './Pages/MainPage';
import MyLibrary from './Pages/MyLibrary';
import VIP from './Pages/VIP';
import Artists from './Pages/Artists';
import Albums from './Pages/Albums';
import Playlists from './Pages/Playlists';
import Charts from './Pages/Charts';
import Radio from './Pages/Radio';
import Videos from './Pages/Videos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Sidebar />
          <div className='content2'>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/Library' component={MyLibrary} />
              <Route path='/VIP' component={VIP} />
              <Route path='/Artists' component={Artists} />
              <Route path='/Albums' component={Albums} />
              <Route path='/Playlists' component={Playlists} />
              <Route path='/Charts' component={Charts} />
              <Route path='/Radio' component={Radio} />
              <Route path='/Videos' component={Videos} />
            </Switch>
          </div>
        </div>
        <MusicPlayer />
      </div> 
    </Router>
  );
}

export default App;
