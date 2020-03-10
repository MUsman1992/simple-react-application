import React from 'react';
import './DeleteView.css';



class DeleteView extends React.Component {

    render() {
        return (
            <div id="delete-job-posting-modal" className="w3-modal">
            <div className="w3-modal-content">
              <header className="w3-container w3-teal"> 
                <span  
                className="w3-button w3-display-topright" onClick={this.props.closeDeleteJobPostingModal}>&times;</span>
                <h2>Delete Job Posting</h2>
              </header>
              <div className="w3-container">
                <p>Do you want to delete the job posting of the company &#8220;{this.props.jobPosting.employer}&#8221; with the title: &#8220;{this.props.jobPosting.title}&#8221;</p>
                
              </div>
              <footer className="w3-container w3-teal modal-footer">
                <button className = "w3-button w3-right modal-delete-button" onClick={this.props.deleteJobPosting}>Delete</button>
                <button className = "w3-button w3-right modal-cancel-button" onClick={this.props.closeDeleteJobPostingModal}>Cancel</button>
              </footer>
            </div>
          </div>
        )
    }

   
      
    }





export default DeleteView;