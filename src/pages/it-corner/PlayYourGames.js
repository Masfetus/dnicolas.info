import React, { useEffect, useRef, useState } from "react";


const pageTitle = `DN - Play Your Games`

function PlayYourGames({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className='bg-body-tertiary' data-aos="fade-up" data-aos-delay="100">
            
        </div>


    )
}

export default PlayYourGames;