import SingleProduct from "../../components/singleProdcut/SingleProduct";
import { singleProduct } from "../../data";
import './porducts.scss';

const Products = () => {

    //Fetching data & sending to SingleProduct Component
    return(
        <div className="products">
            <SingleProduct {...singleProduct} />
        </div>
    )
}

export default Products;