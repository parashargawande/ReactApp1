import "./Table.css";
import React from 'react';
import TableComponent from '../../components/Table/Table'
import IFrame from "../../helpers/IFrame";

const Table = ({ users, displayPannel }) => {
    return <div className="table">
        <div className="title">
            <h2>Table</h2>
        </div>
        <div className="iframe-container" >
            <IFrame>
                <TableComponent users={users} displayPannel={displayPannel} />
            </IFrame>
        </div >
    </div >
}
export default Table;