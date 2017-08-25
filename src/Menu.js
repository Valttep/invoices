//class menu
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { bundle, temp } from './App.js';
const containerStyle = {
   width: 800,
   height: 300,
}

const rButtonStyle = {
   width: 400,
   height: 30,
   margin: 12,
}



class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  //changes what the app.js is showing to user
  changeShow2 = (e) => {
    console.log("Menu CS" + e);
    this.props.changeShow(e);
  };


  render() {

    let bigLabelStyle = {
      fontSize: temp,
    }
    return (

      <div className="Menu" >
        <Paper className="container" style={containerStyle}>
          <div>
            <RaisedButton label={bundle.newInvoice} labelStyle={bigLabelStyle} primary={true} style={rButtonStyle} onTouchTap={() => {this.changeShow2(1);}}/>
          </div>
          <div>
            <RaisedButton backgroundColor="#a2ef7c" label={bundle.createC} labelStyle={bigLabelStyle} primary={false} style={rButtonStyle}/>
          </div>
          <div>
             <RaisedButton backgroundColor="#a2ef7c" label={bundle.browse} labelStyle={bigLabelStyle} primary={false} style={rButtonStyle}/>
          </div>
          <div>
            <RaisedButton backgroundColor="#a2ef7c" label={bundle.editC} labelStyle={bigLabelStyle} primary={false} style={rButtonStyle}/>
          </div>
        </Paper>

      </div>

    );
  }
}

export default Menu;
