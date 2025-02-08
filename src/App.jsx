
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, User, Incomes, Expenses, Homes, Category } from "./pages";
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/users" element={<User />} exact />
            <Route path="/homes" element={<Homes />} exact />
            <Route path="/incomes" element={<Incomes />} exact />
            <Route path="/expenses" element={<Expenses />} exact />
            <Route path="/categories" element={<Category />} exact />
            {/* <Route path="/succes" element={<Succes />} exact />
            <Route path="/detail/:productId" element={<Detail />} exact /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
