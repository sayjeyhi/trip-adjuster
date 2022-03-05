import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { client } from "../src/components/queries/index";

import 'antd/dist/antd.css';

import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Schedule from './components/Pages/Schedule';
import Destinations from './components/Pages/Destinations';
import Recommended from './components/Pages/Recommended';
import Discounts from './components/Pages/Discounts';
import Notifications from './components/Pages/Notifications';
import Login from './components/Pages/Login';


function App() {
  return (
    <ApolloProvider client={client}>
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
