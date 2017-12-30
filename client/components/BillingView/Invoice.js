import React, {Component} from "react"
import {getFormattedDate} from "../utils"
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Invoice extends Component {

    render(){
        if (this.props.data.loading) { return <div> Loading... </div>} 
        const pe_code_formatter = (pe_code) => {
           return(
            <span>
            {pe_code[0]}
            <span style={{color: "#0e5061"}}>
              +{pe_code.length}
            </span>
          </span>
           )
        };

        const {viewer} = this.props.data;
        const finalData = viewer.map((invoice) => {
            let dueDate = new Date(invoice.due_date);
            let invoiceDate = new Date(invoice.invoice_date);
            const pe_code = (
              <span>
                {invoice.pe_code[0]}
                <span style={{color: "#0e5061"}}>
                  +{invoice.pe_code.length}
                </span>
              </span>
            );
            return {
              _id: invoice._id,
              invoice: invoice.invoice,
              pe_code,
              due_date: getFormattedDate(dueDate),
              amount:  invoice.total,
              balance: `$${invoice.balance}`,
              activities: invoice.activities,
              address: invoice.address,
              billing_details: invoice.billing_details,
              company: invoice.company,
              purchase_order: invoice.purchase_order,
            };
          });
    
        return(
            <div>
             <div className="table-container tableContainer">
             <BootstrapTable data={finalData} pagination={true} bordered={false} striped={true} options={{paginationShowsTotal:true }}keyField={"_id"}>
             <TableHeaderColumn dataField="company"  className="td-header-metro" >Company</TableHeaderColumn>
              <TableHeaderColumn dataField="pe_code" dataFormat={ pe_code_formatter } className="td-header-metro" >PE Codes</TableHeaderColumn>
              <TableHeaderColumn dataField="due_date" className="td-header-metro">Due Date</TableHeaderColumn>
              <TableHeaderColumn dataField="invoice" className="td-header-metro" dataSort={true}>Invoice</TableHeaderColumn>
               <TableHeaderColumn dataField="purchase_order" className="td-header-metro">Purchase Order</TableHeaderColumn>
            </BootstrapTable>
              </div>
            </div>
        )
    }
}

export default Invoice;