import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./datatable.scss";

const DataTable = (props) => {
  return (
    <div className="datatable">
      <DataGrid
      className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar: GridToolbar}}
        slotProps={{
            toolbar: {
                showQuickFilter: true,
                quickFilterProps: {debounceMs: 500},
            }
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
