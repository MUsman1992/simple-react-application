import React from 'react';
import './UpdateView.css';

class UpdateView extends React.Component {

    constructor(props) {
        super(props);

        this.editJobPosting = this.editJobPosting.bind(this);
        this.handleEditJobPostingFormDataChange = this.handleEditJobPostingFormDataChange.bind(this);
        var jobPosting = this.props.jobPosting;

        this.state = {
            jobPosting: jobPosting
        }
      
    };

    render() {
        return (
          <div>
              <div >
                  <form >
  
                      <label >TITLE</label>
                      <input type="text" id="jobtitle"  value={this.props.jobPosting.title} name="title" onChange={this.handleEditJobPostingFormDataChange}></input>
                      
                      <label >CITY</label>
                      <input type="text" id="jobcity" value={this.props.jobPosting.city} name="city"  onChange={this.handleEditJobPostingFormDataChange}></input>
  
                      <label >EMPLOYER</label>
                      <input type="text" id="jobemployer" value={this.props.jobPosting.employer} name="employer"  onChange={this.handleEditJobPostingFormDataChange}></input>
  
                      <label >REQUIREMENTS</label>
                      <textarea id="jobrequirements" name="requirements" value={this.props.jobPosting.requirements}  onChange={this.handleEditJobPostingFormDataChange}></textarea>
                      
                      <label >TASKS</label>
                      <textarea id="jobtasks" name="tasks" value={this.props.jobPosting.tasks}  onChange={this.handleEditJobPostingFormDataChange}></textarea>
  
  
                      
                     
                  </form>
              </div>
              <button  className="editJobPostingsbutton" onClick={this.editJobPosting}>Update</button>

          </div>
          
        );
      } 

    editJobPosting(event) {
        
        console.log("edit job posting");
        this.props.editJobPosting(this.state.jobPosting);
     
    }

    handleEditJobPostingFormDataChange(event) {
        var jobPosting = this.state.jobPosting;
        var name = event.target.name;
        jobPosting[name] = event.target.value;
       
        this.setState({jobPosting: jobPosting});
       
    }



}

export default UpdateView;