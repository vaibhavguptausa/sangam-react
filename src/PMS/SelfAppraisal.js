import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './TableStyle.css';
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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

class SelfAppraisal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { redirect: false };
    }

    onRowClick = (fieldValue, row, rowIdx, colIdx) => {
        var togo = "/pms/appraisal/summary" + rowIdx;
        this.props.history.push(togo);
    }

    onClick = (togo) => {
        return togo;
    }

    render() {
        const options = {
            onRowClick: this.onRowClick
        };

        return (
            <div>
                <BootstrapTable data={products} options={options} search={true} pagination={true} tableBodyClass='my-body-class'>
                    <TableHeaderColumn className='table-header' dataField='Appraisal' isKey>Appraisal</TableHeaderColumn>
                    <TableHeaderColumn className='table-header' dataField='Status'>Status</TableHeaderColumn>
                    <TableHeaderColumn className='table-header' dataField='Appraiser'>Appraiser</TableHeaderColumn>
                    <TableHeaderColumn className='table-header' dataField='Details'>Details</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}
export default withRouter(SelfAppraisal);


