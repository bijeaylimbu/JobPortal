import React from "react";
import {Link} from "react-router-dom";
const SendToGmail=({email, label})=> {

    return (

        <Link 
        to=""
        onClick={(e)=> {

            window.location=email;
            e.preventDefault();
        }}
        >

            {label}
</Link>


    );
}

export default SendToGmail;