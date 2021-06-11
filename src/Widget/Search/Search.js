import React, { Component } from 'react';
import "../Search/Search.js"

class Search extends Component{

constructor(props){
    super(props);

    this.state={

        job_title:'',
        place:"",
        category:'',
        result:[]

    };

    this.jobChange=this.jobChange.bind(this);
  
    this.search=this.search.bind(this);
    // this.category=this.category.bind(this);


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

    let{job_title,place,category}=this.state;
    const url_title=`http://127.0.0.1:8000/jobs/all_jobs/?search=${job_title}`;
    const url_location=`http://127.0.0.1:8000/jobs/all_jobs/?job_category=${place}&location=${category}`;

     fetch(url_title, {

        method:'GET'
     }).then(response=> response.json())
     .then(json=> {
         this.setState({result:json});
         console.log(json);

         

     });



}


    render(){

        // if(this.props.result!=null){

        //     return <h1> it is not null</h1>
        // }
        // else{

        //     return <h1>it is null</h1> 
        // }


        return (
            <>


    <input type="text" value={this.state.job_title} onChange={this.jobChange}  />
    <button onClick={()=> this.search()} > Submit</button>
<div>



            {/* {

                this.state.result.map((object,index)=> (
            
                    <p key={index} > {object}</p>
                ))
            }
       
       
       */}

{this.state.result.map(data=><div>{data.id} </div>)}

</div>
            </>



        );
    }
}

export default Search;