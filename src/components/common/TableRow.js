import React, {PropTypes} from 'react'

const TableRow = ({tableData}) => {
    return (
            <tr>
                <td>{tableData.firstName}</td>
                <td>{tableData.lastName}</td>
                <td>{tableData.phoneNumber}</td>
                <td>{tableData.company}
                    <button onClick={() => this.deleteField(tableData.id, "contact")}>X</button>
                </td>
            </tr>
    )
}

TableRow.propTypes = {
    tableData: PropTypes.object
}

export default TableRow
