import React from 'react';
import './ReadView.css';

class ReadView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showUpdateJobPostingNotification: false
        };
        
        this.state.showUpdateJobPostingNotification = this.props.showUpdateJobPostingNotification;


        this.showIndexView = this.showIndexView.bind(this);
        this.hideUpdateJobPostingNotification =  this.hideUpdateJobPostingNotification.bind(this);
      
    };

    render() {
        return (
            
          <div>
              {this.state.showUpdateJobPostingNotification &&
              <div className="notification-update-job-posting">
                <span>
                <button   className="hide-notification-button" onClick={this.hideUpdateJobPostingNotification}>X</button>
                </span>
                <span id="errorMsg">Job posting has been updated successfully.</span>

               </div>}
              <div >
                  <form >
  
                      <label >TITLE</label>
                      <input type="text" id="jobtitle"  value={this.props.jobPosting.title} name="title" disabled></input>
                      
                      <label >CITY</label>
                      <input type="text" id="jobcity" value={this.props.jobPosting.city} name="city"  disabled></input>
  
                      <label >EMPLOYER</label>
                      <input type="text" id="jobemployer" value={this.props.jobPosting.employer} name="employer"  disabled></input>
  
                      <label >REQUIREMENTS</label>
                      <textarea id="jobrequirements" name="requirements" value={this.props.jobPosting.requirements}  disabled></textarea>
                      
                      <label >TASKS</label>
                      <textarea id="jobtasks" name="tasks" value={this.props.jobPosting.tasks}  disabled></textarea>
  
  
                      
                     
                  </form>
              </div>
              <button  className="viewJobPostingsbutton" onClick={this.showIndexView}>Go to the Index View</button>

          </div>
          
        );
      }

    showIndexView(event) {
        
        this.props.showIndexView();
     
    }

    hideUpdateJobPostingNotification() {

        this.setState({showUpdateJobPostingNotification: false});
     
     }
        
      

}


export default ReadView;