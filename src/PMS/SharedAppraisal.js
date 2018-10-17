import React from 'react'
import './TableStyle.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var products = [{
    Appraisal: 'Poor',
    Status: "failed",
    Appraiser: 'No one',
    Details: 'No details'
}, {
    Appraisal: 'Poor',
    Status: "failed",
    Appraiser: 'No one',
    Details: 'No details'
},
{
    Appraisal: 'Poor',
    Status: "Pending",
    Appraiser: 'No one',
    Details: 'No details'
},
{
    Appraisal: 'Poor',
    Status: "Pending",
    Appraiser: 'No one',
    Details: 'No details'
},];

export class SharedAppraisal extends React.Component {
    
    render() {
        const options = {
            firstPage: 'First Page',
            lastPage: 'Last Page'
        };

        return (
            <BootstrapTable data={products} options={options} search={true} pagination={true} columnFilter>
                <TableHeaderColumn className='table-header' dataField='Appraisal' isKey>Appraisal</TableHeaderColumn>
                <TableHeaderColumn className='table-header' dataField='Status'>Status</TableHeaderColumn>
                <TableHeaderColumn className='table-header' dataField='Appraiser'>Main Appraiser</TableHeaderColumn>
                <TableHeaderColumn className='table-header' dataField='Details'>Details</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}