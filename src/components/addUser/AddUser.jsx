import "./adduser.scss";

const AddUser = (props) => {
    return(
        <div className="adduser">
            <div className="modal">
                <span className="close">X</span>
                <h1>Add New {props.slug}</h1>
                <form >
                    {props.column.map( column => (
                        <div className="item">
                            <label>{column}</label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}

export default AddUser;