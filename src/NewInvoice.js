//class for New invoices
import React, { Component } from 'react';
import Ci from './Ci.js';
import Ii from './Ii.js';
import Pi from './Pi.js';
import Oi from './Oi.js';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import { bundle, temp} from './App.js';


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
     this.setState({
       stepIndex: stepIndex + 1,
       finished: stepIndex >= 3,
     });
   };

   handlePrev = () => {
     const {stepIndex} = this.state;
     if(stepIndex > 0){
       this.setState({
         stepIndex: stepIndex - 1,
         finished: stepIndex > 3,
       });
     }
   };

  getStepContent(stepIndex){
    switch (stepIndex) {
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



  render() {

    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
         <div className="NewInvoice" >
            <Paper className="container" style={containerStyle}>

               <div>

                 <div style={contentStyle}>
                   {finished ? (
                      <RaisedButton label="Back to Menu"
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
                            disabled={stepIndex === 0}
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
