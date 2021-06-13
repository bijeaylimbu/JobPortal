import React, { Component } from 'react';
import "../Detail/SearchDetail.css";
import { BiBuildingHouse } from "react-icons/bi";
class SearchDetail extends Component{

    constructor(props){

        super(props);
        this.state={
            error: null,
            detail:[]
        }
    }
 


  componentDidMount(){

   let id=this.props.location.state.id;
    fetch(`http://127.0.0.1:8000/jobs/all_jobs/${id}/`)
    
    .then(res=> res.json())
    
    .then(
        (result)=>{
            
            this.setState({
                detail:result
            })
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

<h2>{detail.position}</h2>
<br/>
<b>Job Posted on: </b>{detail.post_date}
<br/>
 <b>Experience:</b> {detail.experience}
 <br/>
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
<b>Education:</b>   {detail.education} 
<div className="what_we_offer">

    {detail.what_we_offer}
    <h3> What We Offer:</h3>
</div>
<div className="contact"> 
If you are interested for this post please send your updated resume/CV on {detail.email} before {detail.before_date}
</div>
<br/>



</div>
 </div>
          
        );
}
    }
}

export default SearchDetail;