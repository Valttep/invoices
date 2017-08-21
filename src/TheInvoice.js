//111111
import React, {Component} from 'react';
import {cust} from './Ci.js';
import {invoiceInformation} from './Ii.js';
import {r} from './Pi.js';
import {bundle} from './App.js'

class TheInvoice extends Component {
  render() {

    let tableStyle = {
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid'
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

      return today = dd + '.' + mm + '.' + yyyy;;
    }

    return (
      <div>
        <table style={tableStyle} width="100%">
          <tr>
            <td colSpan='2'>
              {bundle.i}

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
              laskutiedot
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
                          maksuehdot
                    </td>
                  </tr>
                  <tr>
                    <td id='huomautusA' style={tableStyle}>
                      {invoiceInformation.top}
                      <br/>
                    </td>
                    <td id='viivastysK' style={tableStyle}>
                      {invoiceInformation.pen}
                      < br/>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                tuotteet
                <hr/>
                <table id='tuoteTaulu' width='100%'>
                <tr id='tuoteRivi'>
                  <td id='nimi' width='40%'>Nimi</td>
                  <td id='hinta'>
                    Hinta
                  </td>
                  <td id='tuoteMaara'>Määrä</td>
                  <td id='tuoteAlv'>Alv-%</td>
                  <td id='tuoteAlv'>hinta ilman Alv</td>
                  <td id='yht'>Yhteensä</td>
                </tr>
              </table>
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
