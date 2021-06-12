import React, { Component } from 'react';
import "../Detail/SearchDetail.css";
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
 {detail.company_name}
</div>
</div>

<div className='other_information'>
 {detail.id}
 <br/>

 {detail.job_category}

</div>
 </div>
          
        );
}
    }
}

export default SearchDetail;