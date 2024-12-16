import React, { useEffect, useRef, useState } from "react";
import pawnLogo from "../../assets/img/logos/Pawn_logo.png"
import { Container, Row, Card, CardTitle, Col, Image, CardBody, ButtonGroup, Button } from "react-bootstrap";
import { CodeBlock, atomOneDark, atomOneLight, CopyBlock, vs2015, paraisoDark, paraisoLight, a11yDark, a11yLight } from "react-code-blocks";

const pageTitle = `DN - Pawn`
const snippet1 = 
`main()
{
    new a = -4;
    if(a < 0)
    {
        printf("Le nombre est négatif ! (%d)", a);
    }
    else if(a == 0)
    {
        printf("Le nombre est nul !");
    }
    else
    {
        printf("Le nombre est strictement positif ! (%d)", a);
    }
}`
function PawnLanguage({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className="bg-body-tertiary">
            <Container className='py-5' data-aos="fade-up" data-aos-delay="100">
                <Row className='my-3 ' >
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center my-5`}>
                        Pawn Language
                    </h2>
                </Row>
                <Row className="justify-content-start text-left "> 
                    <Card>
                        <Row className="m-5">
                            <CardTitle className="text-start border-bottom py-3">Introduction</CardTitle>

                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Image src={pawnLogo} fluid className="h-25" data-aos="flip-left"  data-aos-delay="500"></Image>
                            </Col>
                            <Col sm={8}>                        
                                <CardBody className="justify-content-start text-start " data-aos="flip-up"  data-aos-delay="500">
                                <p>
                                    Disclaimer for chess players, nothing to do with it! In fact, Pawn was formerly named as Small refering to Small-C and its similarities to the C language. Despite its C-like syntax, the process is working differently and each Pawn program is compiled for an abstract machine. CompuPhase (creator of Pawn) defined the keywords as: run-time efficiency, stability, simplicity. In deed, Pawn truly aims to run low-resources programs in microcontrollers for example. The language is up to this date, free to use and under an Apache License.
                                </p>
                                <ButtonGroup className="p-3">
                                    <Button className="border" variant="secondary">CompuPhase - Pawn</Button>
                                    <Button className="border" variant="secondary"> Wikipedia Link</Button>
                                </ButtonGroup>
                                <div className="border">
                                    <CopyBlock
                                        text={snippet1}
                                        language="c++"
                                        showLineNumbers={false}
                                        customStyle={{fontFamily: 'Fira Code'}}
                                        theme={theme === "dark"? atomOneDark: atomOneLight}
                                        codeBlock
                                    />
                                </div>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </div>


    )
}

export default PawnLanguage;