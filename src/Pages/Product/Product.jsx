import SingleProduct from "../../components/singleProdcut/SingleProduct";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
    return (
        <div className="product">
            <SingleProduct {...singleProduct} />
        </div>
    )
}

export default Product;