import { useEffect } from "react";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap"

const pageTitle = "404 - Not Found!"

function PageNotFound({ theme, setTheme }) {    
    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <Card className="p-5" data-aos="zoom-out-down">
            <h1 className="text-warning fw-bold" >404</h1>
            <h3>You have found a secret place.</h3>
            <p c="dimmed" size="lg" ta="center">
            Unfortunately, the page you requested for is not available. Please check the URL or contact the administrator
            </p>
            <ButtonGroup justify="center">
                <Button variant="subtle" className="btn-outline-secondary" size="lg" href="/">
                    Take me back to home page
                </Button>
            </ButtonGroup>
        </Card>
    )
}

export default PageNotFound;