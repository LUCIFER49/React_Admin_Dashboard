import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./adduser.scss";

const AddUser = (props) => {

  // API CALLING
  
  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch (`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       header: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testMail@gamil.com",
  //         phone: "123 456 7890",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    // CALLING FOR API
    
    // mutation.mutate();
    // props.setOpen(false);
  };

  return (
    <div className="adduser">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
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
