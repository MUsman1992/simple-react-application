import React from 'react';
import './CreateView.css';



class CreateView extends React.Component {

    constructor(props) {
      super(props);
    
      this.state = {

          jobPosting: {
              _id: "",
              title: "",
              city: "",
              employer: "",
              requirements: "",
              tasks: ""
          }
        
        };

        
        this.handleCreateJobPostingFormDataChange = this.handleCreateJobPostingFormDataChange.bind(this);
        this.createJobPosting = this.createJobPosting.bind(this);
      
    }
  
    render() {
      return (
        <div>
            <div >
                <form >
                    <label >ID</label>
                    <input type="text" id="jobid" value={this.state.jobPosting._id} name="_id" placeholder="Job ID.." onChange={this.handleCreateJobPostingFormDataChange}></input>

                    <label >{'Title'.toUpperCase()}</label>
                    <input type="text" id="jobtitle"  value={this.state.jobPosting.title} name="title" placeholder="Job Title.." onChange={this.handleCreateJobPostingFormDataChange}></input>
                    
                    <label >CITY</label>
                    <input type="text" id="jobcity" value={this.state.jobPosting.city} name="city" placeholder="City.." onChange={this.handleCreateJobPostingFormDataChange}></input>

                    <label >{'Employer'.toUpperCase()}</label>
                    <input type="text" id="jobemployer" value={this.state.jobPosting.employer} name="employer" placeholder="Employer.." onChange={this.handleCreateJobPostingFormDataChange}></input>

                    <label >{'Requirements'.toUpperCase()}</label>
                    <textarea id="jobrequirements" name="requirements" value={this.state.jobPosting.requirements} placeholder="JOB Requirements.." onChange={this.handleCreateJobPostingFormDataChange}></textarea>
                    
                    <label >{'Tasks'.toUpperCase()}</label>
                    <textarea id="jobtasks" name="tasks" value={this.state.jobPosting.tasks} placeholder="JOB Tasks.." onChange={this.handleCreateJobPostingFormDataChange}></textarea>

                    <button  className="createbutton" onClick={this.createJobPosting}>Submit</button>

                    
                   
                </form>
            </div>
        </div>
        
      );
    }

  

   createJobPosting(event) {
    
    event.preventDefault();
    console.log(this.state.jobPosting);
    var jobPosting = this.state.jobPosting;
    this.props.updateJobPostingsData(jobPosting);

   }

   handleCreateJobPostingFormDataChange(event) {
    var jobPosting = this.state.jobPosting;
    var name = event.target.name;
    jobPosting[name] = event.target.value;
   
    this.setState({jobPosting: jobPosting});
   }


  }
  
  export default CreateView;