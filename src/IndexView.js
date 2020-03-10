import React from 'react';
import DeleteView from './DeleteView';
import './IndexView.css';

class IndexView extends React.Component {


  constructor(props) {
    super(props);
    this.state = {jobPostings: this.props.jobPostings,
       isDeleteViewVisible: false,
       deleteJobPosting: {},
       showDeleteJobPostingNotification: false
     };
    this.showCreateView = this.showCreateView.bind(this);
    this.showJobPostingDetails = this.showJobPostingDetails.bind(this);
    this.updateJobPostingDetails = this.updateJobPostingDetails.bind(this);
    this.openDeleteJobPostingModal = this.openDeleteJobPostingModal.bind(this);
    this.deleteJobPosting = this.deleteJobPosting.bind(this);
    this.closeDeleteJobPostingModal = this.closeDeleteJobPostingModal.bind(this);
    this.hideDeleteJobPostingNotification = this.hideDeleteJobPostingNotification.bind(this);

  }

  renderTableHeader() {
    let header = ["JOB TITLE", "LOCATION", "EMPLOYER", " ", " "]
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  renderTableData() {
    return this.state.jobPostings.map((jobPosting, index) => {
       const { _id, title, city, employer } = jobPosting 
       return (
          <tr key={_id}>
             <td data-job-posting-id={_id + '-job'} style={{cursor: "pointer"}} onClick={this.showJobPostingDetails}>{title}</td>
             <td>{city}</td>
             <td>{employer}</td>
             <td><button data-job-posting-id={_id + '-job'} className="editbutton" onClick={this.updateJobPostingDetails}>EDIT</button></td>
             <td data-job-posting-id={_id + '-job'}><button onClick={this.openDeleteJobPostingModal} className="deletebutton">DELETE</button></td>
          </tr>
       )
    })
 }

 showCreateView() {
   this.props.showCreateView();
}

showJobPostingDetails(event) {
   var jobPostingID = event.currentTarget.getAttribute("data-job-posting-id");
   
   this.props.showReadView(jobPostingID.split("-")[0]);

}

updateJobPostingDetails(event) {
   var jobPostingID = event.currentTarget.getAttribute("data-job-posting-id");

   this.props.showUpdateView(jobPostingID.split("-")[0]);
}

openDeleteJobPostingModal(event) {
   var jobPostingID = event.currentTarget.parentElement.getAttribute("data-job-posting-id").split("-")[0];
   var jobPostings = this.state.jobPostings;
   var jobPosting = jobPostings.find(jobPosting => jobPosting._id === jobPostingID);
   
   this.setState({deleteJobPosting: jobPosting});
   this.setState({isDeleteViewVisible: true});
}

closeDeleteJobPostingModal(event) {
   
   this.setState({deleteJobPosting: {}});
   this.setState({isDeleteViewVisible: false});
}

deleteJobPosting() {
   var jobPostingId = this.state.deleteJobPosting._id;
   
   this.setState({deleteJobPosting: {}, isDeleteViewVisible: false, showDeleteJobPostingNotification: true});
  

   var jobPostingsData  = this.state.jobPostings.filter(function(jobPosting) { 
       return jobPosting._id !== jobPostingId; 
   });

   this.setState({jobPostings: jobPostingsData}, function () {
       console.log("Index view state" +(this.state.jobPostings));
      
   });


   this.props.deleteJobPosting( jobPostingId);
 


    

}

hideDeleteJobPostingNotification() {

   this.setState({showDeleteJobPostingNotification: false});

}

// UNSAFE_componentWillReceiveProps(nextProps) {
//    this.setState({ jobPostings: nextProps.jobPostings });  
//  }

  
  render() {
    return (
       <div >
          <h1 id='title'>JOB POSTINGS</h1>
          {this.state.showDeleteJobPostingNotification &&<div className="notification-delete-job-posting">
             <span>
               <button   className="hide-notification-button" onClick={this.hideDeleteJobPostingNotification}>X</button>
             </span>
             <span id="errorMsg">Job posting has been successfully deleted.</span>

          </div>}
          <table id='jobsdata'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
          <button  className="createbutton" onClick={()=>this.showCreateView()}>Go to the Create View</button>

          {this.state.isDeleteViewVisible && <DeleteView jobPosting = {this.state.deleteJobPosting} 
            deleteJobPosting = {this.deleteJobPosting} closeDeleteJobPostingModal = {this.closeDeleteJobPostingModal}/>}


       </div>
    )
  }
  
}

  export default IndexView;