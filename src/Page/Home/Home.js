import React, { Component } from 'react';
import AllJobsList from '../../Widget/AllJobsList/AllJobsList';
import Header from "../../Widget/Header/Header";
import Search from '../../Widget/Search/Search';
class Home extends Component{



    render(){


        return (
<>
<Header/>
<Search/>

<AllJobsList/>

</>



        );

    }
}
export default Home;