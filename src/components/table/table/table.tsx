import IFrame from "../../IFrame/IFrame";
import '../../../bootstrap.css';
import './table.css'
import { userType } from "../../../Types/types";
type tableType = {
    users?: Array<userType> | null,
    showPosts: Function,
    showProfile: Function
}

const Table = ({ users, showPosts, showProfile }: tableType) => {
    return <div className="table">
        <h3>Table</h3>
        <IFrame>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>website</th>
                        <th>Profile</th>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td><button className="btn btn-link" onClick={() => showProfile(user.id)}>Show Profile</button></td>
                            <td><button className="btn btn-link" onClick={() => showPosts(user.id)}>Show Posts</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </IFrame>
    </div>
}
export default Table;