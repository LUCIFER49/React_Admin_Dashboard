import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./user.scss"

const Users = () => {
    return(
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>

        </div>
    );
}

export default Users;