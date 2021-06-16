import React, { Component } from 'react';
import "../AllJobsList/AllJobsList.css";
import {Link} from 'react-router-dom';
class AllJobsList extends Component{
constructor(props){

    super(props);
    this.state={

        error:null,
        isLoading:false,
        JobsList:[],
        days_lfe:''
      
    }

}
saveSEssion(){
    
}

componentDidMount(){

    fetch("http://127.0.0.1:8000/jobs/all_jobs/")
    .then(jobslist=>jobslist.json())
    .then(
        (result)=>{
            // result.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1);
            this.setState({

                isLoading:true,
                JobsList:result
            });
        },
        (error)=>{
          this.setState({

            isLoading:true,
            error
          });


        }


    )
}

    render(){
       
const {error, isLoading, JobsList,}=this.state;


 if(error){

    return <div> {error.message}</div>
}

else {

        return (


            <>


<div className="jobs_list_main">

<div className="hot_jobs">



</div>
<center><h2>All Jobs</h2></center>
<div className="all_jobs">



{


JobsList.map(jobs=>(

  
< Link to={{
pathname: "/search_detail",
state:{id:jobs.id,
store: sessionStorage.setItem('related_jobs',jobs.job_category)
}

}}
style={{ textDecoration: 'none' }}
className='search_link'
>

  


    <div className='jobs' key={jobs.id}>
       
      <h2 className='job_position'>  {jobs.position}</h2>
<br/>
<h3 className='company_name'>{jobs.company_name}</h3>
<h3 className='location'>{jobs.location}</h3>
Apply Before:{jobs.before_date} ({jobs.days_left} days left)
        </div>
</ Link>

)


)


}



</div>

</div>

            </>
        );
    }
    }
}
export default AllJobsList;