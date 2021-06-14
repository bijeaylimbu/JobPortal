import React, { Component } from 'react';
import "../RelatedJobs/RelatedJobs.css";


import {Link} from 'react-router-dom';

class RelatedJobs extends Component{
constructor(props){

    super(props);
    this.state={

        related_jobs:[],
        related:[],
        page:0,
        prevY:0,

        delay:2000
       
    };



}






componentDidMount(){
    
    
    let related_jobs_list=sessionStorage.getItem('related_jobs')
    if(related_jobs_list===null){
        window.location.reload();
        
    }
    else{
    fetch(`http://127.0.0.1:8000/jobs/all_jobs/?job_category=${related_jobs_list}&location=`)
    .then(result=> result.json())
    .then(

        (fetch_result)=>{

            this.setState({
                related_jobs:fetch_result


            })
        }
    )
 

    }
    
}



    render(){
        const {related_jobs}=this.state;
        console.log(sessionStorage.getItem('related_jobs'));
       
      
        return(

            <>
            <div>
{
related_jobs.slice(0,6).map(jobs=>(
    < Link to={{
        pathname: "/related_search_detail",
        state:{id:jobs.id}
        
        }}
        style={{ textDecoration: 'none' }}
        className='search_link'
        >   
    <div key={jobs.id} className="related_jobs_list">
 
{jobs.company_name}


<h3 className="related_position">  {jobs.position}</h3>

       
        {jobs.location}
        <br/>
       Apply before: {jobs.before_date}

    </div>
    </ Link>
))

}
</div>

            </>



        );
    }
}

export default RelatedJobs;