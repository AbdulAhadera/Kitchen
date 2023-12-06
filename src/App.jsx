import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Recipes from './Pages/Recipes'
import Settings from './Pages/Settings'

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/settings' element={<Settings />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
};

export default App
