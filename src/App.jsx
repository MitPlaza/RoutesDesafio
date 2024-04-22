import { Routes,Route } from 'react-router-dom';
import Home from './assets/views/Home';
import Detalle from './assets/views/Detalle';
import Personajes from './assets/views/Personajes';
import NotFound from './assets/views/NotFound';
import Menu from './assets/components/Menu';
import './App.css'

function App() {

  return (
    <div>
      <Menu/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/personajes" element={<Personajes/>} />
      <Route path="/personaje/:id" element={<Detalle/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  )
}

export default App
