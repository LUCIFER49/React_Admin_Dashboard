import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./datatable.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DataTable = (props) => {

  //  PERFORMING CHANGES USING API
  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: (id)=> {
  //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {method:"delete"});
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${slug}`]);
  //   }
  // })
    
  const handleDelete = (id) => {
    //deleting item
    // mutation.mutate(id);             //CALLING OF API
    console.log(id + " has been deleted!");
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="images/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/images/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
