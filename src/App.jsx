
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages";
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} exact />
            {/* <Route path="/succes" element={<Succes />} exact />
            <Route path="/detail/:productId" element={<Detail />} exact /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
