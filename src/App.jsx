import { Outlet } from 'react-router-dom'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import './main.scss';

function App() {
  

  return (
    <div className='app-container'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
