import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketCuttingApp from './Assessment/TicketCuttingApp';
import TicketData from './Assessment/TicketData';
import CounterApp from './CounterAPP/CounterApp';
import ProductCatalogApp from './ProductCatalog/ProductCatalogApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <TicketCuttingApp data={TicketData}></TicketCuttingApp>
  {/* <ProductCatalogApp></ProductCatalogApp> */}
  {/* <CounterApp></CounterApp> */}
  </>
);
