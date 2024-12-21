import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function TextLink({href, text}) {
    return (
        <a href={href} className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
            {text}
            <FontAwesomeIcon icon={faExternalLink} className="mx-2" size="xs"/>
        </a>
    )
}

export default TextLink;