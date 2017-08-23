//111111
import React, {Component} from 'react';
import {cust} from './Ci.js';
import {invoiceInformation} from './Ii.js';
import {r} from './Pi.js';
import {bundle, temp} from './App.js'
import { oInfo } from './Oi.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';



class TheInvoice extends Component {
  constructor(){
    super()
    this.state = {
      rows: r,
    }
  }

  render() {

    const styling = {
      fontSize: temp,
    }

    let tableStyle = {
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
    };

    let senderStyle = {
      fontSize: 9,
    };

    function correctDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }
      console.log("Time");
      return today = dd + '.' + mm + '.' + yyyy;
    }

    return (
      <div>
        <table style={tableStyle} width="100%" onLoad={this.tulostaTuote}>
          <tr>
            <td colSpan='2'>
              {bundle.i}
              <p style={senderStyle}>
                {oInfo.name}, {oInfo.address}, {oInfo.zip} {oInfo.city}
                {oInfo.bId}, {oInfo.name}, {oInfo.city}
              </p>
            </td>
          </tr>
          <tr>
            <td width='70%' id='osoiteTiedot'>
              {cust.name}
              <br/> {cust.address}
              <br/> {cust.zip + " " + cust.city}
              <br/>
            </td>
            <td width='30%'>
              {bundle.ii}
              <table id = 'laskuTaulu' cellSpacing = '0'>
                <tr>
                  <td style={tableStyle}>
                    {correctDate()}
                  </td>
                  <td id='laskuNro' style={tableStyle}>
                    {invoiceInformation.iNro}
                    <br/>
                  </td>
                </tr>
                <tr>
                <td id='aNro' style={tableStyle}>
                  {cust.cNro}
                  <br/>
                </td>
                <td style={tableStyle}>
                  {invoiceInformation.ref}
                </td>
                </tr>
                <tr>
                  <td id='aYtun' style={tableStyle}>
                    {cust.bId}
                    <br/>
                  </td>
                  <td style={tableStyle}>

                  </td>
                </tr>
                  <tr>
                    <td colSpan='2' style={tableStyle}>

                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' style={tableStyle}>
                      {bundle.top}
                    </td>
                  </tr>
                  <tr>
                    <td id='huomautusA' style={tableStyle}>
                      {invoiceInformation.top}
                      <br />
                    </td>
                    <td id='viivastysK' style={tableStyle}>
                      {invoiceInformation.pen}
                      <br />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                {bundle.product}
                <hr/>
                <Table selectable={false} multiSelectable={false} style={styling}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn style={styling}>{bundle.tablepname}</TableHeaderColumn>
                    <TableHeaderColumn style={styling}>{bundle.quantity}</TableHeaderColumn>
                    <TableHeaderColumn style={styling}>{bundle.price}</TableHeaderColumn>
                    <TableHeaderColumn style={styling}>{bundle.vat} %</TableHeaderColumn>
                    <TableHeaderColumn style={styling}>{bundle.total}</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody selectable={false} multiSelectable={false} displaySelectAll={false} adjustForCheckbox={false} displayRowCheckbox={false}>

                  {this.state.rows.map((row, i)=>(
                    <TableRow key={i}>
                      <TableRowColumn>{row.product}</TableRowColumn>
                      <TableRowColumn>{row.q}</TableRowColumn>
                      <TableRowColumn>{row.p}</TableRowColumn>
                      <TableRowColumn>{row.vat}</TableRowColumn>
                      <TableRowColumn>{row.total}</TableRowColumn>
                    </TableRow>
                  ))}


                </TableBody>
              </Table>
            </td>
          </tr>
          <tr>
            <td colSpan='2' id='lahettajaInfo'>
              tiedot
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TheInvoice;
