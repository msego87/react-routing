import React from 'react';
import { useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';
import NotFound from './NotFound';

const Invoice = () => {
  // El usePArams sirve para obtener una variable de la url
  const {invoiceId} = useParams();
  const invoice = getInvoice(Number(invoiceId));
  if (invoice === undefined) return <NotFound />

  return (
    <main style={{padding: "1rem"}}>
      <h3>Total Due: ${invoice.amount}</h3>
      <p> {invoice.name}: {invoice.number}</p>
      <p>Due Date: {invoice.due}</p>
      <button onClick={() => deleteInvoice(invoiceId)}>Delete</button>
    </main>
  )
}

export default Invoice