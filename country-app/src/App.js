import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// Components
import Button from 'react-bootstrap/Button';
import CountryCard from './components/CountryCard';
import Header from './components/Header';
import Statistics from './components/Statistics';



function App() {
const [appPage, setAppPage] = useState(true);

  return (
    <div className="App">
      <Header title="Country App" />
      <Button onClick={() => setAppPage(true)} variant={appPage ? "primary" : "outline-primary"} className="btn-lg">Countries </Button>
      <Button onClick={() => setAppPage(false)} variant={appPage ? "outline-primary" : "primary"} className="btn-lg">Statistics </Button>
      {appPage ? (
      <CountryCard />
      ) : (
      <Statistics />
      ) }  
      
      
    </div> 
  );
}

export default App;
