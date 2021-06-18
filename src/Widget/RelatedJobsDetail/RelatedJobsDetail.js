import React, { Component } from 'react';
import "./RelatedJobsDetail.css";
import { BiBuildingHouse } from "react-icons/bi";
import SendToGmail from '../ButtonGmail/ButtonGmail';



class RelatedJobsDetail extends Component{

    constructor(props){

        super(props);
        this.state={
            error: null,
            detail:[],

            related_job:[]
        }
    }
 


  componentDidMount(){

   let id=this.props.location.state.id;
    fetch(`http://127.0.0.1:8000/jobs/all_jobs/${id}/`)
    
    .then(res=> res.json())
    
    .then(
        (result)=>{
            
            this.setState({
                detail:result,
                
                
            })
            sessionStorage.setItem('related_jobs',result.job_category)
        },
        (error) => {
            this.setState({
             
            
            });
          }
    
    )
    
   
    
  }

    render(){

const {detail,error}=this.state;
console.log(detail)
if(detail==null){

    return <div> <h2> Null</h2></div>
}
else
{
        return (


            <div className='job_detail_main'>

<div className='detail_companay_name_div'>
    <div className='company_name_div'>
        <div className="company_name_logo">
<BiBuildingHouse className="react_icon"/>
        </div>

        <div className="company_name_div_info">
        {detail.company_name}
 <br/>
 {detail.location}
</div>
</div>
</div>

<div className='other_information'>
    <div   className="">
<ul className="general_info">
<h2>{detail.position}</h2>
<br/>
<b>Job Posted on: </b> <li> {detail.post_date}</li>
<br/> 
 <b>Experience:</b><li>{detail.experience}</li>
 <br/> 
 <b>Job Type:</b><li> {detail.job_type}</li>
 
 <br/>
 <b>Salary:</b><li> {detail.salary}</li>
 <br/> 
 <b>Position Type:</b> <li>{detail.position_type}</li>
 <br/>
 <br/>
 <b>Number of Vacancy/s:</b> <li>{detail.number_of_vacancy}</li>
 <br/>

 <b>Education:</b> <li> {detail.education} </li>
 </ul>
 <div className="job_description">
   <h3> Job Description</h3>
    
{detail.job_description}
 </div>
 <div className="responsiblities">
 <h3>Responsiblities </h3>
     {detail.responsiblities}
 </div>

<div className='skill'>
<h3> Skill</h3>

    {detail.skill}
</div>

<div className="what_we_offer">
<h3> What We Offer:</h3>
    {detail.what_we_offer}
  
</div>
<div className="contact"> 
If you are interested for this post please send your updated resume/CV on {detail.email}  before {detail.before_date}

</div>
<br/>


</div>

</div>
 </div>
          
        );
}
    }
}

export default RelatedJobsDetail;