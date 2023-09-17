import SingleUser from "../../components/singleUser/SingleUser";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {

    //Fetching data & sending to Single Display Component i.e., SingleProduct
    return (
        <div className="product">
            <SingleUser {...singleProduct} />
        </div>
    )
}

export default Product;