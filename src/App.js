import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Header = styled.h1`
	padding-top: 22px;
	color: white;
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	font-size: 70px;
	background: rgb(0, 59, 255);
	background: linear-gradient(183deg, rgba(0, 59, 255, 1) 0%, rgba(17, 44, 196, 0.9990371148459384) 100%);
`;
const Image = styled.img`
	border-radius: 50%;
	height: 90px;
	border: white solid 4px;
`;

const With = styled.p`
	font-style: italic;
	font-size: 15px;
`;

const Names = styled.p`
	font-size: 15px;
	display: block;
`;
const PictureDiv = styled.div`
	display: flex;
	content-align: left;
	padding: 15px;
`;
const Name = styled.p`
	font-size: 15px;
`;
const Body = styled.body`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
  justify-content: space-around;
  padding: 20px;
`;
const Text = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 25px;
color: rgb(114, 114, 114);
	font-family: 'Montserrat', sans-serif;
`;

const Link = styled.a`
`

function App() {
	return (
		<div>
			<Header>
				Creator club.
				<With>with </With>
				<Names>JLi Jin, Josh Constine, Dave Ambrose, Ian Kar, and Mario Gabriele</Names>
				<PictureDiv>
					<Image src="/jun.jpg" />
					<Name>Jun</Name>
				</PictureDiv>
			</Header>
			<Body>
				<Text>
					Li Jin, Josh Constine, Dave Ambrose, Ian Kar, and Mario Gabriele discuss tooling for new creators,
					subscription fatigue, power distribution on social media, and the "economy of recognition." What
					should we talk about? That's up to you. Add your ideas to this doc 
				</Text>
        <Link>'https://docs.google.com/document/d/19tt3bQaxa1V95q8xcN1bnyGRV6WIj4wepRRcpZBJ87I/edit?usp=sharing'</Link>
			</Body>
		</div>
	);
}

export default App;
