import React from 'react';
import styled from 'styled-components';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';

const ShareTitle = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 18px;
	padding-bottom: 5px;
`;

const IconDiv = styled.span`
	margin: 0px 7px;
	hover: green;
	color: gray;
	&:hover {
		color: rgb(0, 166, 120);
	}
`;

const UrlButton = styled.button`
background-color: gray;
border-radius:28px;
border:1px solid gray;
display:inline-block;
cursor:pointer;
color: white;
font-family: 'Montserrat';
font-size:14px;
padding:5px 13px;
text-decoration:none;
text-shadow:0px 1px 0px gray;

`;

const Share = () => {
	return (
		<>
			<ShareTitle>Share this Event</ShareTitle>
			<IconDiv>
				<FacebookCircle size="33" />
			</IconDiv>
			<IconDiv>
				<TwitterWithCircle size="30" />
			</IconDiv>
			<IconDiv>
				<Linkedin size="32" />
			</IconDiv>
            <UrlButton>Copy URL</UrlButton>
		</>
	);
};

export default Share;
