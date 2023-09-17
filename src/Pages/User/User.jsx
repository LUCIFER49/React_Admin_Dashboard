import SingleUser from "../../components/singleUser/SingleUser"
import { singleUser } from "../../data";

const User = () => {
    return(
        <div className="user">
            <SingleUser {...singleUser}/>
        </div>
    )
}

export default User;