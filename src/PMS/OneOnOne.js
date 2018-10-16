import React from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
function onAfterInsertRow(row) {
    let newRowStr = '';
  
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
  }
  const options = {
    afterInsertRow: onAfterInsertRow   // A hook for after insert rows
  };  
  var products = [{
    Appraisal: 'Poor',
    Status: "failed",
    ReviewedBy: 'No one',
    Date: '9/11/2003'
},{
    Appraisal: 'Poor',
    Status: "failed",
    ReviewedBy: 'No one',
    Date: '9/11/2002'
},
{
    Appraisal: 'Poor',
    Status: "failed",
    ReviewedBy: 'No one',
    Date: '9/11/2001'
},
{
    Appraisal: 'Poor',
    Status: "failed",
    ReviewedBy: 'No one',
    Date: '9/11/2004'
}];  
export class OneOnOne extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const options = {
            firstPage: 'First Page',
            lastPage: 'Last Page'
          };
        return (
          <BootstrapTable data={ products }  options={ options } search={true} pagination={true} columnFilter insertRow>
              <TableHeaderColumn dataField='Appraisal' isKey >Appraisal</TableHeaderColumn>
              <TableHeaderColumn dataField='Status'>Status</TableHeaderColumn>
              <TableHeaderColumn dataField='ReviewedBy'>Reviewed By</TableHeaderColumn>
              <TableHeaderColumn dataField='Date'>Created Date </TableHeaderColumn>
          </BootstrapTable>
        );
      }

}



