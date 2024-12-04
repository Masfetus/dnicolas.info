import React, { useEffect, useRef, useState } from "react";


const pageTitle = `DN - `

function AboutMe({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className='bg-body-tertiary' data-aos="fade-up" data-aos-delay="100">
            
        </div>


    )
}

export default AboutMe;