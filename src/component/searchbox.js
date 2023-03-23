import React from "react";

const Searchbox=({searchChange})=>{
    return(
        <div>
            <input type='search' 
            placeholder="search robofriends"
            onChange={searchChange}/>
        </div>
    )
}

export default Searchbox;