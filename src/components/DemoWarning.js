import React from "react";
import "../styles/App.css"


const DemoWarning = (props)=>{
    
    return (
      <div className="demoWarning">
        <p className="warningText">This is a read-only version of Red String, intended for demo purposes only.</p>
        <a href="https://github.com/red-string">Source Code</a>
        <a href="mailto:nicknauert@gmail.com?Subject=Red%20String%20Inquiry">Nick Nauert</a>
        <a href="boyntonsc@gmail.com?Subject=Red%20String%20Inquiry">Stephen Boynton</a>
        <a href="mailto:rtkelley@gmail.com?Subject=Red%20String%20Inquiry">Ryan Kelley</a>
        
      </div>
    );
  }

  export default DemoWarning