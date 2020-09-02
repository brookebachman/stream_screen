import React from 'react';
import styled from 'styled-components';

const EventInfoTitle = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 18px;
	padding-bottom: 5px;
`;

const EventBlurb = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	color: #727272;
	padding-bottom: 5px;
`;

const DocContribute = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	color: #727272;
	padding-bottom: 8px 0px 8px 0px;
`;
const H2 = styled.h2`
	padding: 10px 0px 10px 0px;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
`;

const Link = styled.a`
	text-decoration: none;
	color: black;
`;

const EventSummary = () => {
	return (
		<>
			<EventInfoTitle>Event Information</EventInfoTitle>
			<EventBlurb>
				Li Jin, Josh Constine, Dave Ambrose, Ian Kar, and Mario Gabriele discuss tooling for new creators,
				subscription fatigue, power distribution on social media, and the "economy of recognition."
			</EventBlurb>
			<DocContribute>
				What should we talk about? That's up to you.{' '}
				<H2>
					Add your ideas to this{' '}
					<Link href="https://docs.google.com/document/d/19tt3bQaxa1V95q8xcN1bnyGRV6WIj4wepRRcpZBJ87I/edit?usp=sharing">
						doc.
					</Link>{' '}
				</H2>
			</DocContribute>
		</>
	);
};

export default EventSummary;
