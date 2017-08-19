//Class for the Product information
import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { bundle, temp } from './App.js';
import { Line } from './Line.js';

let lines = [];
let row = [];
let index = 0;
let i = 0;

let block = "";


class Pi extends Component {

  constructor() {
      super();
      this.state = {
        selected: [],
        prodName: "",
        quantity: "",
        price: "",
        vat: "",
        total: "",
        rows: [],
      }
  }

  isSelected = (rowIndex) => {
    return this.state.selected.indexOf(rowIndex) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
    console.log(this.state.selected.length + " pituus " + this.state.selected + " sisältö");
  };

  updateField = (part, data) =>{
    this.setState({
      prodName: part===0?data:this.state.prodName,
      quantity: part===1?data:this.state.quantity,
      price: part===2?data:this.state.price,
      vat: part===3?data:this.state.vat,
    });
  }

  addButton = () => {
    let r = this.state.rows;
    r[index] = new Line(this.state.prodName, this.state.quantity, this.state.price, this.state.vat);
    console.log(this.state.prodName, this.state.quantity, this.state.price, this.state.vat);
    console.log(r[index]);
    this.setState({
      rows: r,
    });
    index++;
  }

  deleteSelected = () => {
    let tempRow = this.state.rows;
    let tempSel = this.state.selected;
    for(var i = 0; i < tempSel.length; i++){
      tempRow.splice(tempSel[i], 1);
    }
    this.setState({
      rows: tempRow,
    });
  }


  render() {

    const styling = {
      fontSize: temp,
    }

    return (
      <div className="Pi" style={styling}>
        <p> {bundle.pi} </p>
        <TextField style={styling} floatingLabelText={bundle.pName} value={this.state.prodName} onChange={(e, v) => {this.updateField(0, v);}}/>
        <TextField style={styling} floatingLabelText={bundle.quantity} value={this.state.quantity} onChange={(e, v) => {this.updateField(1, v);}}/>
        <TextField style={styling} floatingLabelText={bundle.price} value={this.state.price} onChange={(e, v) => {this.updateField(2, v);}}/>
        <TextField style={styling} floatingLabelText={bundle.vat} hintText="ex. 24,00" value={this.state.vat} onChange={(e, v) => {this.updateField(3, v);}} /> <br />
        <RaisedButton labelStyle={{FontSize: temp}} label={bundle.add} primary={true} onTouchTap={this.addButton} />
        <hr />
        <Table selectable={true} multiSelectable={true} onRowSelection={this.handleRowSelection} style={styling}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={styling}>{bundle.tablepname}</TableHeaderColumn>
            <TableHeaderColumn style={styling}>{bundle.quantity}</TableHeaderColumn>
            <TableHeaderColumn style={styling}>{bundle.price}</TableHeaderColumn>
            <TableHeaderColumn style={styling}>{bundle.vat} %</TableHeaderColumn>
            <TableHeaderColumn style={styling}>{bundle.total}</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>

          {this.state.rows.map((row, i)=>(
            <TableRow key={i} selected={this.isSelected(i)}>
              <TableRowColumn>{row.product}</TableRowColumn>
              <TableRowColumn>{row.q}</TableRowColumn>
              <TableRowColumn>{row.p}</TableRowColumn>
              <TableRowColumn>{row.vat}</TableRowColumn>
              <TableRowColumn>{row.total}</TableRowColumn>
            </TableRow>
          ))}


        </TableBody>
      </Table>

      <RaisedButton labelStyle={{fontSize: temp}} label={bundle.del} primary={false} onTouchTap={this.deleteSelected} disabled={this.state.selected.length <= 0} />
      </div>
    );
  }
}

export default Pi;
