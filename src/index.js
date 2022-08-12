import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketCuttingApp from './Assessment/TicketCuttingApp';
import TicketData from './Assessment/TicketData';
import CounterApp from './CounterAPP/CounterApp';
import ProductCatalogApp from './ProductCatalog/ProductCatalogApp';
import ComplexState from './ReactHooks/ComplexState';
import SimpleState from './ReactHooks/SimpleState';
import ContextProvider from './StateManagement/CounterApp/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <SimpleState></SimpleState> */}
  {/* //<ComplexState></ComplexState> */}
  {/*<TicketCuttingApp data={TicketData}></TicketCuttingApp>*/}
  {/* <ProductCatalogApp></ProductCatalogApp> */}
  {/* <CounterApp></CounterApp> */}
  <ContextProvider></ContextProvider>
  </>
);
