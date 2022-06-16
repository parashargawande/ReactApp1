import './Table.css';
import * as constants from '../../helpers/Constant';

const TableComponent = ({ displayPannel, users }) => {
    return <div className="table-component">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>
                            <button type="button" className="btn btn-link" onClick={() => displayPannel(constants.PROFILE, user.id)}>View Profile</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-link" onClick={() => displayPannel(constants.POSTS, user.id)}>View Posts</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}
export default TableComponent;