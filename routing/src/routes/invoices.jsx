import { getInvoices } from '../data.js';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

const invoices = () => {

  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
      style={{
        borderRight:"solid 1px",
        padding: "1rem",
      }}
      >
        <input type="search"
        value={searchParams.get("filter") || ""}
        onChange={(e) => {
          let filter = e.target.value;
          if(filter){
            setSearchParams({filter})
          }else{
            setSearchParams({})
          }
        }}/>

        {
        invoices.filter(invoice => {
          let filter = searchParams.get('filter');
          if(!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
        .map(invoice => (
          //se reemplaza Link por NavLink ya que tiene la propiedad 'Active', que es algo del router
          <NavLink
            style={({ isActive }) =>{
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive? 'hotPink' : null
              }
            }}
            key={invoice.number} 
            to={`/invoices/${invoice.number}`}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default invoices