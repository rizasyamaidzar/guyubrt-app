
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User, Incomes, Expenses, Homes, Category, Dashboard, DetailCategories, CreateHome, DetailHome, CreateExpenses, CreateUser, CreateIncomes } from "./pages";
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} exact />

            <Route path="/users" element={<User />} exact />
            <Route path="/users/create" element={<CreateUser />} exact />

            {/* route home  */}
            <Route path="/homes" element={<Homes />} exact />
            <Route path="/homes/create" element={<CreateHome />} exact />
            <Route path="/homes/:id" element={<DetailHome />} exact />



            <Route path="/incomes" element={<Incomes />} exact />
            <Route path="/incomes/create" element={<CreateIncomes />} exact />

            <Route path="/expenses" element={<Expenses />} exact />
            <Route path="/expenses/create" element={<CreateExpenses />} exact />

            <Route path="/categories" element={<Category />} exact />
            <Route path="/categories/:id" element={<DetailCategories />} />
            {/* <Route path="/succes" element={<Succes />} exact />
            <Route path="/detail/:productId" element={<Detail />} exact /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
