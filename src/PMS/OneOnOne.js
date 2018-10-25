import React from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import './TableStyle.css';
import {Popup} from './Modal';
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
}, {
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

export default class OneOnOne extends React.Component {
    constructor(props){
        super(props);
        this.state={modalState: false};
    }

    onRowClick = (row) => {
         console.log(`hi`);
         this.setState({modalState: !this.state.modalState})
         
    }
    handleClose=()=> {
        this.setState({ modalState: false });
      }
    
  
    render() {
       
        const options = {
           
            onRowClick: this.onRowClick
        };

        return (
            <div>
            <BootstrapTable data={products} options={options} search={true} pagination={true} insertRow trClassName='tr-string-example' tableBodyClass='my-body-class' >
                <TableHeaderColumn className='table-header' dataField='Appraisal' isKey >Appraisal</TableHeaderColumn>
                <TableHeaderColumn className='table-header' dataField='Status'>Status</TableHeaderColumn>
                <TableHeaderColumn className='table-header' dataField='ReviewedBy'>Reviewed By</TableHeaderColumn>
                <TableHeaderColumn className='table-header' dataField='Date'>Created Date </TableHeaderColumn>
            </BootstrapTable>
            { this.state.modalState ? <Popup modalState={this.state.modalState} onClose={this.handleClose}></Popup>:<div></div>}
        
            </div>
        );
    }
}