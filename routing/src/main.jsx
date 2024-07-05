import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './routes/invoices.jsx';
import Invoice from './routes/Invoice.jsx';
import Expenses from './routes/expenses';
import NotFound from './routes/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Esto es una ruta anidada, invoices y expenses son hijos de App. Por lo tanto lo que este en App va a estar en las otras 2 */}
        <Route path='/' element={<App />}>
          <Route path='invoices' element={<Invoices />}>
            <Route index element={
              <main style={{padding: "1rem"}}>
                <p>Select an invoice</p>
              </main>
            }></Route>
            <Route path={':invoiceId'} element={<Invoice />}></Route>
          </Route>
          <Route path='expenses' element={<Expenses />}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
