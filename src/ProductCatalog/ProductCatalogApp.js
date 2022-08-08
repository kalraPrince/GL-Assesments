import React from "react";
import ProductData from "./ProductData"
import ProductCatalog from "./ProductCatalog";

class ProductCatalogApp extends React.Component {

    render() {
       // console.log(ProductData)
        return(<ProductCatalog data={ProductData}></ProductCatalog>);
    }
}
export default ProductCatalogApp;