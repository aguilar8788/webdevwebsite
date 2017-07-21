import React, {PropTypes} from 'react'
import TableRow from './TableRow'

const Table = ({tableData, handleDelete}) => {
    return (
        <table>

            <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                </tr>
            {renderData(tableData, handleDelete)}
            </tbody>
        </table>
    )
}

function renderData(data, handleDelete) {
    return data.map((element, index) => {
       return(
           <tr key={index}>
               <td>{element.firstName}</td>
               <td>{element.lastName}</td>
               <td>{element.phoneNumber}</td>
               <td>{element.company}
                   <button onClick={() => handleDelete(element.id, "contact")}>X</button>
               </td>
           </tr>
       )
    })

}

Table.propTypes = {
    tableData: PropTypes.array,
    handleDelete: PropTypes.func
}

export default Table
