import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar';
import countries from './countries.json'
import {useState} from 'react'

function App() {
  const [country, setCountry] = useState(countries)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<CountriesList country={country}/>} />
        <Route path='/details' element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
