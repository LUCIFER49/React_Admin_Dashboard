import SingleProduct from "../../components/singleProdcut/SingleProduct";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {

    //Fetching data & sending to Single Display Component i.e., SingleProduct
    return (
        <div className="product">
            <SingleProduct {...singleProduct} />
        </div>
    )
}

export default Product;