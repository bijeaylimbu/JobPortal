import React, { Component } from 'react';
import "../RelatedJobs/RelatedJobs.css";
class RelatedJobs extends Component{
constructor(props){

    super(props);
    this.state={

        related_jobs:[],
        related:[]
       
    };



}

componentDidMount(){
    let related_jobs_list=sessionStorage.getItem('related_jobs')
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



    render(){
        const {related_jobs}=this.state;
        console.log(sessionStorage.getItem('related_jobs'));
      
        return(

            <>
            <div>
{
related_jobs.map(jobs=>(

    <div key={jobs.id} className="related_jobs_list">

        {jobs.id}
    </div>
))

}
</div>

            </>



        );
    }
}

export default RelatedJobs;