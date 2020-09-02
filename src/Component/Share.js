import React from 'react';
import styled from 'styled-components';
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {TwitterWithCircle} from '@styled-icons/entypo-social/TwitterWithCircle'

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


const Share = () => {
	return (
		<>

			<ShareTitle>Share this event</ShareTitle>
            <IconDiv>
            <FacebookCircle size="33"   />
            </IconDiv>
            <IconDiv>
            <TwitterWithCircle size="30" />
            </IconDiv>
            <IconDiv>
            <Linkedin size="32" />
            </IconDiv>
       


		</>
	);
};

export default Share;