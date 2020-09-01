import React from 'react'
import styled from 'styled-components';




const EventInfoTitle = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 22px;

`;

const EventBlurb = styled.h3`
font-family: 'Montserrat', sans-serif;
font-size: 16px;
color: #727272;
`;

const DocContribute = styled.h3`
font-family: 'Montserrat', sans-serif;
font-size: 16px;
color: #727272;
`;

const Link = styled.a`
text-decoration: none;
color: black;
`;




const EventSummary = () => {
    return (
        <>
        <EventInfoTitle>
            Event Information
        </EventInfoTitle>
        <EventBlurb>
        Li Jin, Josh Constine, Dave Ambrose, Ian Kar, and Mario Gabriele discuss tooling for new creators, subscription fatigue, power distribution on social media, and the "economy of recognition." 
        

        </EventBlurb>
        <DocContribute>What should we talk about? That's up to you. Add your ideas to this 	<Link href="https://docs.google.com/document/d/19tt3bQaxa1V95q8xcN1bnyGRV6WIj4wepRRcpZBJ87I/edit?usp=sharing">
						doc.
						</Link></DocContribute>

 
        </>
    )
  

}


export default EventSummary