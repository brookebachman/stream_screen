import React from 'react';
import styled from 'styled-components';

const AboutHostTitle = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 18px;
	padding-bottom: 5px;
`;

const ReadingLink = styled.a`
	text-decoration: none;
    color: black;
    padding-Bottom: 10px;
`;

const HostBlurb = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	color: #727272;
	padding: 7px 0px 7px 0px;
`;

const ContactMario = styled.a`
	padding-top: 10px;
	text-decoration: none;
	color: rgb(0, 166, 120);
`;
const HostCard = () => {
	return (
		<>
			<AboutHostTitle>About The Host</AboutHostTitle>
			<HostBlurb>
				Tech from idea to IPO at{' '}
				<ReadingLink href="https://www.readthegeneralist.com">The Generalist. </ReadingLink>Investing in
				chaotic-good founders at <ReadingLink href="https://charge.vc/">Charge VC.</ReadingLink>
				<br/>
				<ContactMario>Contact mario 🦊</ContactMario>
			</HostBlurb>
		</>
	);
};

export default HostCard;
