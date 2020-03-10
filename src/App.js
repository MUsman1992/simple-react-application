import React from 'react';
import IndexView from './IndexView';
import CreateView from './CreateView';

import ReadView from './ReadView';
import UpdateView from './UpdateView';

import jobPostingsData from './jobpostings.json';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { jobPostings: jobPostingsData, isCreateViewVisible: false,  isIndexViewVisible: true, isReadViewVisible: false,
      isUpdateViewVisible: false,readViewData: {} , showUpdateJobPostingNotification:false, updateViewData: {}};
    
    this.showIndexView = this.showIndexView.bind(this);
    this.showCreateView = this.showCreateView.bind(this);
    this.updateJobPostingsData = this.updateJobPostingsData.bind(this);
    this.showReadView = this.showReadView.bind(this);
    this.deleteJobPosting = this.deleteJobPosting.bind(this);
    this.showUpdateView = this.showUpdateView.bind(this);
    this.editJobPosting = this.editJobPosting.bind(this);
  }
  
  

  render() {
    return (
      <div>
        {this.state.isIndexViewVisible && <IndexView  jobPostings = {this.state.jobPostings} showCreateView = {this.showCreateView}
                         showReadView = {this.showReadView} deleteJobPosting = {this.deleteJobPosting} showUpdateView= {this.showUpdateView} />}

        {this.state.isCreateViewVisible && <CreateView updateJobPostingsData = {this.updateJobPostingsData}/>}
        {this.state.isReadViewVisible && <ReadView jobPosting = {this.state.readViewData} showUpdateJobPostingNotification= {this.state.showUpdateJobPostingNotification} showIndexView = {this.showIndexView}/>}
        {this.state.isUpdateViewVisible && <UpdateView jobPosting = {this.state.updateViewData} editJobPosting = {this.editJobPosting}/>}

      </div>
    );
  }

  updateJobPostingsData(jobPosting) {
    var jobPostings = this.state.jobPostings;
    jobPostings.push(jobPosting);
    this.setState({jobPostings: jobPostings});
    this.setState({isIndexViewVisible: true});
    this.setState({isCreateViewVisible: false});

  }

  deleteJobPosting(jobPostingID) {
    

    var  jobPostingsData  = this.state.jobPostings.filter(function(jobPosting) { 
      return jobPosting._id !== jobPostingID; 
    });

    this.setState({jobPostings: jobPostingsData}, function () {
      console.log("App view state" + this.state.jobPostings);
      
            
    });

    
  }


  showIndexView() {
    this.setState({isIndexViewVisible: true});
    this.setState({isCreateViewVisible: false});
    this.setState({isReadViewVisible: false});
    this.setState({isUpdateViewVisible: false});

  }

  showCreateView() {
    this.setState({isCreateViewVisible: true});
    this.setState({isIndexViewVisible: false});
    
  }

  showReadView(jobPostingID) {
   
    var jobPostingsData = this.state.jobPostings;
    var jobPosting = jobPostingsData.find(jobPosting => jobPosting._id === jobPostingID);
    console.log(jobPosting);
    this.setState({readViewData: jobPosting});
    this.setState({showUpdateJobPostingNotification: false});
    this.setState({isIndexViewVisible: false});
    this.setState({isUpdateViewVisible: false});
    this.setState({isReadViewVisible: true});
   
    
  }

  showUpdateView(jobPostingID) {
   
    var jobPostingsData = this.state.jobPostings;
    var jobPosting = jobPostingsData.find(jobPosting => jobPosting._id === jobPostingID);
    console.log(jobPosting);
    this.setState({updateViewData: jobPosting});
    this.setState({isIndexViewVisible: false});
    this.setState({isReadViewVisible: false});
    
    this.setState({isUpdateViewVisible: true});
    
    
    
  }

  editJobPosting(jobPosting) {
    console.log(jobPosting);
    var jobPostingID = jobPosting._id;
    // var  jobPostingsData  = this.state.jobPostings.filter(function(jobPosting) { 
    //   return jobPosting._id !== jobPostingID; 
    // });
    var index = this.state.jobPostings.findIndex(jobPosting => jobPosting._id === jobPostingID);
    //jobPostingsData.push(jobPosting);
    jobPostingsData[index] = jobPosting;
    this.setState({jobPostings: jobPostingsData});

    this.setState({readViewData: jobPosting});
    this.setState({isUpdateViewVisible: false});
    this.setState({isIndexViewVisible: false});
    //this.setState({isIndexViewVisible: true});

    this.setState({isReadViewVisible: true});
    this.setState({showUpdateJobPostingNotification: true});

  }
}

export default App;
