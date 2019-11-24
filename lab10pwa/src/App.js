import React from 'react';
import './App.css';
import Route from 'react-router-dom/Route';
import Agregar from './components/agregar';
import Home from './components/home';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Radar from './components/Radar';

class App extends React.Component {
  render() {
    return (
      <div>
         <div className="titulo">
            TITULO
      </div>
        <Radar/>
      </div>
    );
  }
}
export default App;
