//Class for the Invoice information textfields
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { bundle, temp } from './App.js';
import { InvoiceInfo } from './InvoiceInfo.js';
import RaisedButton from 'material-ui/RaisedButton';

export let invoiceInformation;

export let eOk2 = 0;
let probs = 0;

class Ii extends Component {

   constructor() {
      super();
      this.state = {
        iNro: "",
        dd: null,
        ref: "",
        top: "",
        pen: "",
      }
   }


   updateField = (part, data) =>{
     this.setState({
       iNro: part===0?data:this.state.iNro,
       dd: part===1?data:this.state.dd,
       ref: part===2?data:this.state.ref,
       top: part===3?data:this.state.top,
       pen: part===4?data:this.state.pen,
     });
   }

  createIi = () => {
     probs = 0;
     for(var k in this.state){
       if(this.state[k] === null || this.state[k] === ""){
         probs++;
       }
     }
     if(probs === 0){
     invoiceInformation = new InvoiceInfo(
       this.state.iNro,
       this.state.dd,
       this.state.ref,
       this.state.top,
       this.state.pen
     );
     console.log(invoiceInformation);
     eOk2 = 1;
   } else {
     alert(bundle.alert2);
   }

  }
  //key bindings
  keyDown = (event) => {
    if(event.keyCode === 13){
      this.createIi();
    }
  }

  render() {

    const styling = {
      padding: 2,
      display: 'inline-block',
      fontSize: temp,
    }

    return (
      <div className="Ii" style={styling} onKeyDown={this.keyDown}>
        <p> {bundle.ii} </p>
        <TextField style={styling} floatingLabelText={bundle.iNro} value={this.state.iNro} onChange={(e, v) => {this.updateField(0, v);}} />
        <DatePicker style={styling} hintText={bundle.dd} value={this.state.dd} onChange={(e, v) => {this.updateField(1, v);}} />
        <TextField style={styling} floatingLabelText={bundle.ref} value={this.state.ref} onChange={(e, v) => {this.updateField(2, v);}} />
        <TextField style={styling} floatingLabelText={bundle.top} value={this.state.top} onChange={(e, v) => {this.updateField(3, v);}} hintText="ex. Net 14" />
        <TextField style={styling} floatingLabelText={bundle.pen} value={this.state.pen} onChange={(e, v) => {this.updateField(4, v);}} hintText="ex. 7%" />
        <br/>
        <RaisedButton labelStyle={{fontSize: temp}} label={bundle.addIi} primary={true} onTouchTap={this.createIi} />
      </div>
    );
  }
}

export default Ii;
