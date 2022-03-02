import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import 'antd/dist/antd.css';

import Home from './components/Home';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Destinations from './components/Destinations';
import Recommended from './components/Recommended';
import Discounts from './components/Discounts';
import Notifications from './components/Notifications';

function App() {
  return (
    <Router>
      <div className="App font-face-gb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
