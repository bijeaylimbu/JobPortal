import React, { Component } from 'react';
import "../Search/Search.css"
import {Link} from "react-router-dom";
import WorkingPicture from "../../assets/Image/working_picture.png"
class Search extends Component{

constructor(props){
    super(props);

    this.state={

        job_title:'',
        place:'',
        category:'',
        result_job_position:[],
        result_place:[],
        result_category:[],
        default_value:"",
        error:null,
        isLoaded:false,
        fade:false

    };

    this.jobChange=this.jobChange.bind(this);
  
    this.placeChange=this.placeChange.bind(this);
    this.categoryChange=this.categoryChange.bind(this);


}



jobChange(event){


    this.setState({job_title:event.target.value});

}

placeChange(event){

    this.setState({place:event.target.value});
}

categoryChange(event){

    this.setState({category:event.target.value});
}

search(){

    let{job_title}=this.state;
    const url_title=`http://127.0.0.1:8000/jobs/all_jobs/?search=${job_title}`;
   

     fetch(url_title, {

        method:'GET'
     }).then(response=> response.json())
     .then(json=> {
         this.setState({result_job_position:json});
         console.log(json);

         

     },
     (error)=> {

        this.setState({

            error
        })
     }
)
     


}

DropDownSelect(){
   let {place}=this.state;
   let {category}=this.state;
    const url_location=`http://127.0.0.1:8000/jobs/all_jobs/?job_category=${category}&location=${place}`;

     fetch(url_location, {

        method:'GET'
     }).then(response=> response.json())
     .then(json=> {
         this.setState({result_place:json});
         console.log(json);

         

     },
     (error)=> {

        this.setState({

            error
        })
     }
     
     )
    
    
}


MergeFunction(){
 
console.log(this.state.job_title)
console.log(this.state.place)
     if(this.state.job_title===undefined && this.state.job_title===null) {
    this.DropDownSelect();
    }
   else if(this.state.place==='Select Place' && this.state.place!==null ) {
        this.search();
   }
  
}

    render(){

        const {fade}=this.state;
const {error}=this.state;
if(error){

    return <div>{error.message}</div>
}
else{

        return (
            <>
<div className="search_main"> 

<img src={WorkingPicture} className="working_image"/>

<div className="search_bar"> 
    <input type="text"
     className='search_input'
      value={this.state.job_title}
       onChange={this.jobChange}
       placeholder="Job Title Please"
       />
    
    <button onClick={()=> this.search()}
      className='search_button'
      onAnimationEnd={()=> this.setState({fade:false})}
     

      > Submit</button>
      </div>
      </div>
<div>




<div className=''>

{
//search in words
}
{this.state.result_job_position.map(data=>
<div className="search_result_div">
    
 
< Link to={{
pathname: "/search_detail",
state:{id:data.id}

}}
style={{ textDecoration: 'none' }}
className='search_link'
>

    
    <div className='result_of_search_main'>
<div className="result_of_search_main_part1">
   {data.position} 
<br/>
{data.company_name}
    
</div>
<div className="result_of_search_main_part2">
{data.location}
<br/>
Posted on:{data.post_date}
</div>
  </div>
</ Link>

     </div>
   
     
     )}

{
    //Select Place
}

     {/* <select value={this.state.place}
 onChange={this.placeChange}  
 defaultValue={this.state.default_value}>
     
     <option value="Select Place">Select Place</option>
    <option value="Kathmandu">Kathmandu</option>
    <option value="Pokhara">Pokhara</option>
    <option value="Lalitpur">Lalitpur</option>
    <option value="Bharatpur">Bharatpur</option>
    <option value="Biratnagar">Biratnagar</option>
    <option value="Janakpur">Janakpur</option>
    <option value="Hetauda">Hetauda</option>
    <option value="Dhangadhi">Dhangadhi</option>
    <option value="Tulsipur">Tulsipur</option>



    <option value="Itahari">Itahari</option>
    <option value="Nepalgunj">Nepalgunj</option>
    <option value="Butwal">Butwal</option>
    <option value="Kalaiya">Kalaiya</option>
    <option value="Dharan">Dharan</option>
    <option value="Jitpursimara">Jitpursimara</option>
    <option value="Other">Other</option>
  
  </select>   */}

 
</div>
</div>
      
{/* {this.state.result_place.map(data=><div className="search_result_div">
 

{data.id}
    {data.job_category}
    <br/>
    {data.position}

     </div>)} */}
    
</>



        );
}
    }
}

export default Search;