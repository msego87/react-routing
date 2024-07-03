import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <h1>Bookkeper!</h1>
        <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
          <Link to="/invoices">Invoices</Link>  |  <Link to="/expenses">Expenses</Link>
        </nav>
      </header>
      {/* esta elemento sirve para renderizar los hijos de este componente,
      fijarse en el main.jsx */}
      <Outlet></Outlet>
    </>

  )
}

export default App