import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "./App.scss"
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route
            path="*"
            element={
              <PageNotFound/>
            }
          />
        </Routes>
        </div>
        
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App