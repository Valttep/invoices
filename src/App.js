//app class
import React, { Component } from 'react';
import NewInvoice from './NewInvoice.js';
import Menu from './Menu.js';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SettingsDialog from './SettingsDialog.js';
import BUNDLE from './bundle.js';
injectTapEventPlugin();

export let bundle = BUNDLE.en;

let marker = false;

let langMarker = false;

export let temp = 15;



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      show: <Menu changeShow={this.changeShow} />,
      dShow: null,
      uiColor: '#25BC8A',
      fSize: 15,
    }
  }

  setLanguage = (lang) => {
    if(!langMarker){
      if (lang in BUNDLE)
        bundle = BUNDLE[lang];
      this.forceUpdate();
      langMarker = true;
    } else {
      if (lang in BUNDLE)
        bundle = BUNDLE['en'];
      this.forceUpdate();
      langMarker = false;
    }
  }

  fontSize = (v) => {
    this.setState({
      fSize: v,
    });
    temp = v;
    this.forceUpdate();
  }

  changeShow = (e) => {
    console.log("CS apprunko");
    console.log(e);
    if(e < 1){
      this.setState({
        show: <Menu changeShow={this.changeShow} />,
      });
    } else {
      this.setState({
        show: <NewInvoice changeShow={this.changeShow} />,
      });
    }
  }

  changeUiColor = (v) =>{
    this.setState({
      uiColor: v,
    });
  }

  toggleSetting = () => {
    if(!marker){
      this.setState({
        dShow: <SettingsDialog toggleSetting={this.toggleSetting} changeUiColor={this.changeUiColor} fontSize={this.fontSize}/>,
      });
      marker = true;
    } else {
      this.setState({
        dShow: null,
      });
      marker = false;
    }
  }

  toggleDrawer = () => {
    this.setState({
       drawerOpen: !this.state.drawerOpen,
    });
  }




  render() {
    let textStyle = {
      fontSize: this.state.fSize,
    }

    return (
      <MuiThemeProvider>
        <div className="App" >
          <AppBar title={bundle.title}
            style={{backgroundColor: this.state.uiColor,}}
            titleStyle={{fontSize: this.state.fSize}}
            iconElementLeft={<FlatButton label={bundle.settings} labelStyle={{fontSize: this.state.fSize}} style={{position:'absolute'}} onTouchTap={this.toggleDrawer}/>}
          >

          </AppBar>
          <Drawer open={this.state.drawerOpen}>
            <MenuItem onTouchTap={() => {this.toggleDrawer(); this.setLanguage('fi')}} style={textStyle}> {bundle.language} </MenuItem>
            <MenuItem onTouchTap={() => {this.toggleDrawer();  this.toggleSetting();}} style={textStyle}> {bundle.uiSets} </MenuItem>
          </Drawer>
          {this.state.show}
          {this.state.dShow}

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
