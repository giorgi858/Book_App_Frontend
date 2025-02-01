import React from 'react'
import ListsPage from './pages/ListsPage'
import { Routes, Route } from 'react-router-dom'
import SingleListPage from './pages/SingleListPage'
import Header from './components/Header'

const App = () => {
  return (
    <div className='container dark'>
       <div className='app'>
        <Header/>
        <Routes>
          <Route path='/' Component={ListsPage}/>
          <Route path='/book/:id' Component={SingleListPage}/>
        </Routes>
        </div> 
    </div>
  )
}

export default App