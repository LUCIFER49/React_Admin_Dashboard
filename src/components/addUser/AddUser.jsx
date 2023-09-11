import "./adduser.scss";

const AddUser = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        //add new item
        //for API 
        //axios.part(`api/$(slug)s`, {})
    }

  return (
    <div className="adduser">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)} >X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit} >
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
            <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
