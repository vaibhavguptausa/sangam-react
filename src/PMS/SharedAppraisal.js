import React from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

  var products = [{
    Appraisal: 'Poor',
    Status: "failed",
    Appraiser: 'No one',
    Details: 'No details'
},{
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
export class SharedAppraisal extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const options = {
            firstPage: 'First Page',
            lastPage: 'Last Page'
          };
        return (
          <BootstrapTable data={ products }  options={ options } search={true} pagination={true} columnFilter>
              <TableHeaderColumn dataField='Appraisal' isKey>Appraisal</TableHeaderColumn>
              <TableHeaderColumn dataField='Status'>Status</TableHeaderColumn>
              <TableHeaderColumn dataField='Appraiser'>Main Appraiser</TableHeaderColumn>
              <TableHeaderColumn dataField='Details'>Details</TableHeaderColumn>
          </BootstrapTable>
        );
      }

}



