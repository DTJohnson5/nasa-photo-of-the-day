import React from "react";

 function Media(img){
    return(
        <>
        {(img.media_type ==="video") ?  
        <iframe width="420" height="315" src={img.src}></iframe>
        :
        <img src={img.hdurl} width="420" height="315"></img>}



             <p className="date">{img.date}</p>
            <p className="reason">{img.explanation}</p>
        </>
    )
}

 export default Media; 