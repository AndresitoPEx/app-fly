import { BrowserRouter, useRoutes, useNavigate } from 'react-router-dom'


import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'


const AppRoutes = () => {

  let router = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/gallery', element: <Gallery /> },    
    { path: '*', element: <NotFound /> }
  ])
  return router
}



import './App.css'

function App() {

  return (
    <BrowserRouter>
    
      <AppRoutes />

    </BrowserRouter>
  )
}

export default App
