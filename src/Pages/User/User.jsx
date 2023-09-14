import SingleProduct from "../../components/singleProdcut/SingleProduct"
import { singleUser } from "../../data";

const User = () => {
    return(
        <div className="user">
            <SingleProduct {...singleUser}/>
        </div>
    )
}

export default User;