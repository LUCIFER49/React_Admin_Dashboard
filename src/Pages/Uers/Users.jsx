import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import AddUser from "../../components/addUser/AddUser";
// import { useQuery } from "@tanstack/react-query";
import { userRows } from "../../data";
import "./user.scss";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/images/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];



const Users = () => {

  const [open, setOpen] = useState(false);

  // const { isLoading, data } = useQuery({
  //   queryKey: ['allusers'],
  //   queryFn: () =>
  //     fetch('https://localhost:8800/api/users').then(
  //       (res) => res.json(),
  //     )
  // })

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {/* {isLoading ? ("Loading ...") : (<DataTable slug="users" columns={columns} rows={data} /> )} */}
      <DataTable slug="users" columns={columns} rows={userRows} />
      { open && <AddUser slug="user" columns={columns} setOpen={setOpen} /> }
    </div>
  );
};

export default Users;
