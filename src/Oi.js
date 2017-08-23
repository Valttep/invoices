//Class for the userinfo
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { bundle, temp } from './App.js';
import { OwnInfo } from './OwnInfo.js';
import RaisedButton from 'material-ui/RaisedButton';


export let oInfo;

class Oi extends Component {

   constructor() {
      super();
      this.state = {
        name: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        bId: "",
        phone: "",
        email: "",
      }
   }

   updateField = (part, data) =>{
     this.setState({
       name: part===0?data:this.state.name,
       address: part===1?data:this.state.address,
       zip: part===2?data:this.state.zip,
       city: part===3?data:this.state.city,
       country: part===4?data:this.state.country,
       bId: part===5?data:this.state.bId,
       phone: part===6?data:this.state.phone,
       email: part===7?data:this.state.email,
     });
   }

   addInfo = () => {
     oInfo = new OwnInfo(this.state.name,
       this.state.address,
       this.state.zip,
       this.state.city,
       this.state.country,
       this.state.bId,
       this.state.phone,
       this.state.email
     );
     console.log(oInfo);
   }

  render() {

    const pads = {
      padding: 2,
      display: 'inline-block',
      fontSize: temp,
    }

    return (
      <div className="Ci" style={pads}>
        <p> {bundle.userInfo} </p>
        <TextField style={pads} floatingLabelText={bundle.name} value={this.state.name} onChange={(e, v) => {this.updateField(0, v);}} hintText="ex. Gravel Company" />
        <TextField style={pads} floatingLabelText={bundle.address} value={this.state.address} onChange={(e, v) => {this.updateField(1, v);}} hintText="Kalevantie 4" />
        <TextField style={pads} floatingLabelText={bundle.zip} value={this.state.zip} onChange={(e, v) => {this.updateField(2, v);}} hintText="ex. 04401" />
        <TextField style={pads} floatingLabelText={bundle.city} value={this.state.city} onChange={(e, v) => {this.updateField(3, v);}} hintText="ex. Tampere" />
        <TextField style={pads} floatingLabelText={bundle.country} value={this.state.country} onChange={(e, v) => {this.updateField(4, v);}} hintText="" />
        <TextField style={pads} floatingLabelText={bundle.bId} value={this.state.bId} onChange={(e, v) => {this.updateField(5, v);}} hintText="ex. Y-code" />
        <TextField style={pads} floatingLabelText={bundle.phone} value={this.state.phone} onChange={(e, v) => {this.updateField(6, v);}} hintText="" />
        <TextField style={pads} floatingLabelText={bundle.email} value={this.state.email} onChange={(e, v) => {this.updateField(7, v);}} hintText="xx@company.fi" />
        <br/>
        <RaisedButton labelStyle={{fontSize: temp}} label={bundle.saveI} primary={true} onTouchTap={this.addInfo} />
      </div>

    );
  }
}

export default Oi;
