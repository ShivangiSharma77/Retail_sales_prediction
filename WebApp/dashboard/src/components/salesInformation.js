import React from 'react';
import { Button ,List, Form} from 'semantic-ui-react';

class SalesPrediction extends React.Component{
  constructor()
  {
    super()
    this.state={
      ch:0,
      step:0,
      timefrom:""

    }
    this.nextstep= this.nextstep.bind(this);
    this.prevstep=this.prevstep.bind(this);
    this.handlechange=this.handlechange.bind(this);
    this.handleonclick=this.handleonclick.bind(this);
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.nextstep();
}

back  = (e) => {
    e.preventDefault();
    if (this.state.step==3 ||(this.state.step==2) ||(this.state.step==1) ) {
      this.setState(
        {
          step:0,
        ch:0
      });
          
    }
    
    else{
    this.prevstep();
}
}


  nextstep(){
    
    if (this.state.ch==1 ){
      if (this.state.step==-1) {
        this.setState({
          step:1
        });
      }
      else{
      this.setState({
        step:1
      });
    }
  }
  else if(this.state.ch==2) {
    this.setState({
      step:2
    });
  }
  else if(this.state.ch==3) {
    this.setState({
      step:3
    });
  }
  
  else if(this.state.ch==0) {
    this.setState({
      step:-1
    });
  }
 
  else {
    this.setState({
      step:0
    });
   
  }
}




  prevstep(){
    this.setState({
      step:this.state.step-1,
    });
  }
  
  handleonclick(event){
    this.setState({
      ch:event.target.value
    });
  }
  handlechange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}


render(){
  const {step} = this.state;
  const {fname,lname,mobileno,date ,timefrom,timeto} = this.state;
  const values = {fname,lname,mobileno,date ,timefrom,timeto};
  
  switch(step) {
    case -1:
     return(
     <div className="Final">
      <br/>
      <br/>
      {/* <span/> */}
     <h1>View Sales Details:</h1>
     <input className="infinal" type="radio" id="choice"  name="ch"  value="1" onClick={this.handleonclick} />
     <label>Sales data</label><br/><span/>
     <input className="infinal" type="radio" id="choice" name="ch"  value="2" onClick={this.handleonclick} />
     <label>Sales in last seven days</label><br/>
     <input className="infinal" type="radio" id="choice" name="ch" value="3" onClick={this.handleonclick} />
     <label>Monthly sales</label><br/>
     <Button className="infinal" onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
     <footer> * Please enter a valid choice</footer>
     
    
  
   </div>
     )
   case 0:
     return(
     <div className="Final">
      <br/>
      <br/>
     
     <h1 >View Sales Details:</h1>
     <input className="infinal" type="radio" id="choice"  name="ch"  value="1" onClick={this.handleonclick} />
     <label>Sales data</label><br/><span/>
     <input className="infinal" type="radio" id="choice" name="ch"  value="2" onClick={this.handleonclick} />
     <label>Sales in last seven days</label><br/>
     <input className="infinal" type="radio" id="choice" name="ch" value="3" onClick={this.handleonclick} />
     <label>Monthly sales</label><br/>
     <Button className="infinal" onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
   
     
  
   </div>
   )

  case 1:
    
    return(
      //Added for the time being
      <div className="Final">
        <br/>
      <br/>
        {/* <span/> */}
        <h1>There is no content to display</h1>  
        <Button onClick={this.back} className="bttn">back to main page</Button>
      
        
      </div>
    )
    

  case 2:
    
    return(
      //Added for the time being
      <div className="Final">
        <br/>
      <br/>
      
        <h1>There is no content to display</h1>  
        <Button onClick={this.back} className="bttn">back to main page</Button>
       
        
      </div>
    )

  case 3:
    return(
      <Form className="Final">
 <br/>
      <br/>
  
      <h1>Enter the month: </h1>
      <br/>
      
      <label>month: </label>
          <input className="bttnfinal"
          name="timefrom"
          value={this.state.timefrom}
          placeholder='From'
          type="date"
          onChange={this.handlechange}/>
          <br/>
         
          <Button onClick={this.back} className="bttn">Back</Button>
          
          <Button onClick={this.saveAndContinue} className="bttn">Next </Button>
              
     </Form>
    );
    default:
      return(
        
        <div className="Final">
           <br/>
      <br/>
          <h1 >No Content to display</h1>
          <Button onClick={this.back} className="bttn">back to main page</Button>
      </div>
      )
             } //Switch
        
   }//render
}
export default SalesPrediction;
