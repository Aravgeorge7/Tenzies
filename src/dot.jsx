import React from "react";

export default function Dot(props){
    
    const styles = {
        height: "10px",
        width: "10px",
        backgroundColor: "black",
        borderRadius: "50%",
        
    }
    return(
        <span className="dots" style={styles}></span>
    )
}