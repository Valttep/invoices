import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { bundle } from './App.js';
import { RadioButton, RadioButtonGroup }  from 'material-ui/RadioButton';

class SettingsDialog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }

  }

  uiColor = (v) => {
    this.props.changeUiColor(v);
  }


  handleClose = () => {
    this.setState({
      open: !this.state.open,
    });
    this.props.toggleSetting();
  }

  setSize = (e, v) =>{
    this.props.fontSize(v);
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return(
      <Dialog
          title={bundle.settingTitle}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>
          <p>
          {bundle.uiColor}<br />
          <img src="blue.png" alt="blue" onTouchTap={() => {this.uiColor('#3F48CC');}} />
          <img src="default.png" alt="green, default" onTouchTap={() => {this.uiColor('#25BC8A');}} />
          <img src="red.png" alt="red" onTouchTap={() => {this.uiColor('#88001B');}} />
          </p>
          <br />
          <p style={{Align:'middle'}}>
          {bundle.uiFont}
          <div style={{padding: 5,}}>
            <RadioButtonGroup name="size" defaultChecked={this.state.fSize} onChange={this.setSize}>
              <RadioButton value="12" label="12 points" />
              <RadioButton value="15" label="15 points" />
              <RadioButton value="20" label="20 points" />
            </RadioButtonGroup>



          </div>
        </p>
      </div>
        </Dialog>
    );
  }
}
export default SettingsDialog;
