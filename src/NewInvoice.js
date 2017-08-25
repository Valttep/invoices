//class for New invoices
import React, { Component } from 'react';
import Ci,  { eOk3 } from './Ci.js';
import Ii, { eOk2 } from './Ii.js';
import Pi, { eOk4 } from './Pi.js';
import Oi, { everythingOk } from './Oi.js';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import { bundle, temp } from './App.js';


export let ok = false;

const containerStyle = {
   width: '80%',
}


class NewInvoice extends Component {

   constructor(props) {
      super(props);
      this.state = {
        finished: false,
        stepIndex: 0,
      }
   }

   changeShow2 = (e) => {
     console.log("NI CS");
     this.props.changeShow(e);
   };

   handleNext = () => {
     const {stepIndex} = this.state;
     let ok = everythingOk + eOk2 + eOk3 + eOk4;
     if(ok >= this.state.stepIndex + 1){
       this.setState({
         stepIndex: stepIndex + 1,
         finished: stepIndex >= 3,
       });
     } else {
      alert(bundle.alert2);
     }
   };

   handlePrev = () => {
     const {stepIndex} = this.state;
     if(stepIndex > -1){
       this.setState({
         stepIndex: stepIndex - 1,
         finished: stepIndex > 3,
       });
     }
   };

  getStepContent(stepIndex){
    switch (stepIndex) {
      case -1:
        return this.changeShow2(0);
      case 0:
        return <Oi />;
      case 1:
        return <Ci />;
      case 2:
        return <Ii />;
      case 3:
        return <Pi />;
      default:
        return 'too long';
    }
  }

  keydown = (event) => {
    if(event.keyCode === 39){
      this.handleNext();
    }
    if(event.keyCode === 37){
      this.handlePrev();
    }
  }


  render() {

    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
         <div className="NewInvoice" >
            <Paper className="container" style={containerStyle} onKeyDown={this.keyDown}>

               <div>

                 <div style={contentStyle}>
                   {finished ? (
                      <RaisedButton label={bundle.btm}
                        onTouchTap={() => {this.changeShow2(0);}}
                      />

                    ):(
                      <div>
                        <div>{this.getStepContent(stepIndex)}</div>
                        <Stepper activeStep={stepIndex}>
                          <Step style={{fontSize: temp}}>
                            <StepLabel style={{fontSize: temp}}> {bundle.userInfo} </StepLabel>
                          </Step>
                          <Step style={{fontSize: temp}}>
                            <StepLabel style={{fontSize: temp}}> {bundle.ci} </StepLabel>
                          </Step>
                          <Step>
                            <StepLabel style={{fontSize: temp}}> {bundle.ii} </StepLabel>
                          </Step>
                          <Step>
                            <StepLabel style={{fontSize: temp}}> {bundle.pi} </StepLabel>
                          </Step>
                        </Stepper>
                        <div style={{marginTop: 12}}>
                          <FlatButton
                            label={bundle.back}
                            disabled={false}
                            onTouchTap={this.handlePrev}
                            style={{marginRight: 12}}
                          />
                          <RaisedButton
                            label={stepIndex === 3 ? bundle.finish : bundle.next}
                            labelStyle={{fontSize: temp}}
                            primary={true}
                            onTouchTap={this.handleNext}
                          />
                        </div>
                      </div>
                   )}
                 </div>
               </div>
            </Paper>

         </div>

    );
  }
}

export default NewInvoice;
