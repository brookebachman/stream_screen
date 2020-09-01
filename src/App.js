import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Header = styled.div`
	background: rgb(0, 59, 255);
	margin-top: 0;
`;

// padding-top: 0px;
// max-width: 940px;
//   margin: 0 auto;
//   padding: 0 5%;
//   clear: both;`;
// background: linear-gradient(183deg, rgba(0, 59, 255, 1) 0%, rgba(17, 44, 196, 0.9990371148459384) 100%);

const HeaderH1 = styled.h1`
	filter: blur(20px);
`;
const Container = styled.div`
	max-width: 960px;
	margin: 22px auto 0 auto;
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
const Body = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	justify-content: space-around;
`;
const Text = styled.p`
	font-weight: 400;
	font-size: 18px;
	line-height: 25px;
	color: rgb(114, 114, 114);
	font-family: 'Montserrat', sans-serif;
`;

const Link = styled.a``;

function App() {
	return (
		<div>
			<Header>
				<HeaderH1>Creator club.</HeaderH1>

				<Container>
					Creator club.
					<With>with </With>
					<Names>JLi Jin, Josh Constine, Dave Ambrose, Ian Kar, and Mario Gabriele</Names>
					<PictureDiv>
						<Image src="/jun.jpg" />
						<Name>Jun</Name>
					</PictureDiv>
				</Container>
			</Header>
			<Body>
				<Text>
					Li Jin, Josh Constine, Dave Ambrose, Ian Kar, and Mario Gabriele discuss tooling for new creators,
					subscription fatigue, power distribution on social media, and the "economy of recognition." What
					should we talk about? That's up to you. Add your ideas to this doc
				</Text>
				<Link>
					https://docs.google.com/document/d/19tt3bQaxa1V95q8xcN1bnyGRV6WIj4wepRRcpZBJ87I/edit?usp=sharing
				</Link>
			</Body>
		</div>
	);
}

export default App;
