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

let inTotal = 0;

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
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }
      return today = dd + '.' + mm + '.' + yyyy;
    }

    function inTotalCalc(){
      inTotal = 0;
      for(var k in r){
        inTotal +=r[k].total
      }
      return inTotal;
    }

    return (
      <div>
        <button type="submit" onClick={() => {window.print();}}>Print this page</button>
        <table style={tableStyle} width="100%">
          <tr>
            <td colSpan='2'>
              {bundle.i}
              <p style={senderStyle}>
                {oInfo.name}, {oInfo.address},<br />
                {oInfo.zip} {oInfo.city} <br />
                {oInfo.email}, {oInfo.phone}
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
                    {bundle.iNro}: {invoiceInformation.iNro}
                    <br/>
                  </td>
                </tr>
                <tr>
                <td id='aNro' style={tableStyle}>
                  {bundle.cNro}: {cust.cNro}
                  <br/>
                </td>
                <td style={tableStyle}>
                  {bundle.ref}: {invoiceInformation.ref}
                </td>
                </tr>
                <tr>
                  <td id='aYtun' style={tableStyle}>
                    {bundle.bId}: {cust.bId}
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
              <table style={tableStyle} width="100%">
                <tr>
                  <td style={tableStyle}>
                    IBAN: {oInfo.iban}
                  </td>
                  <td style={tableStyle}>
                    BIC: {oInfo.bic}
                  </td>
                </tr>
                <tr>
                  <td style={tableStyle}>
                    {bundle.sender}{oInfo.name}
                  </td>
                  <td style={tableStyle}>
                    {bundle.ref}: {invoiceInformation.ref}
                  </td>
                </tr>
                <tr>
                  <td style={tableStyle}>
                    {bundle.receiver} <br />
                    {cust.name} <br />
                    {cust.address} <br />
                    {cust.zip} {cust.city}
                  </td>

                  <td style={tableStyle} >
                    {bundle.dd}: {invoiceInformation.dd} {bundle.total}: {inTotalCalc()} €
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TheInvoice;
