import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";





function Navbar() {

    const [showLinks, setShowLinks] =useState(false);
    const [showDrop, setShowDrop] = useState(false);

    

    //get start
 
    

    return (
        <div className="Navbar">
            <div className="leftside">
                <div className="links" id = {showLinks ? "hidden": ""}>
                    <a href="/home">Home</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/aboutus">About us</a>
                    <a href="contact" onClick ={showDrop? "hidden" : '' }>Contact </a>
                </div>
                <button onClick ={() => setShowLinks(!showLinks)} ><ReorderIcon /></button>    
            </div>   
 

            <div className="rightside">
                <div className="links" id = {showLinks ? "hidden": ""}>
                    <a href="helpcenter">Help Center</a>
                    <a href = "/Login">Log in</a>
                </div>

            </div>
        </div>


        

       
    )
}



  

export default Navbar;
