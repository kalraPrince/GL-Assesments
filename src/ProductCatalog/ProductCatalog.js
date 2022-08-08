import React from "react"
import "./ProductCatalog.css"

class ProductCatalog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products : this.props.data
        }
    }
    render() {
        return(<div>
            <nav class="navbar navbar-light bg-light" className="navbar-ex">
    <h1 className="nav-heading">Products catalogue App</h1>
</nav>
<div class="container">
  <div class="row">
    {
   this.state.products.map((product)=>(

  <div class="col-4 mt-5">
    <div class="card " className="card-ex">
      <div class="card-body">
      <img class="card-img-top" src="https://m.media-amazon.com/images/I/41Vj+8XWIQL._SY300_SX300_.jpg" alt="Card image cap"></img>
        <h5 class="card-title">{product.product_name}</h5>
        <p class="card-text">{product.description}</p>
        <a href={product.link} class="btn btn-primary">Click to Buy</a>
      </div>
      <div>
        
        </div>
    </div>
  </div>
   ))
    }
  </div>
</div>
        </div>)
    }

}
export default ProductCatalog;