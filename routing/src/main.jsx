import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Invoices from './routes/invoices.jsx'
import Expenses from './routes/expenses'
import NotFound from './routes/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='invoices' element={<Invoices />}>
            <Route path={':invoiceID'} element={<Invoice/>}>

            </Route>
          </Route>
          <Route path='expenses' element={<Expenses />}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
