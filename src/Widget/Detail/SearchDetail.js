import React, { Component } from 'react';
import "../Search/Search.css";
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


            <div>



 {detail.id}
 <br/>

 {detail.job_category}


 </div>
          
        );
}
    }
}

export default SearchDetail;