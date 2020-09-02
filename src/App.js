import React from 'react';
import styled from 'styled-components';
import EventInfo from './Component/EventInfo.js';
import EventSummary from './Component/EventSummary';
import HostCard from './Component/HostCard.js';
import Share from './Component/Share.js';
import backdrop from './backdrop.svg';
import ProfileCard from './Component/ProfileCard.js';

const Header = styled.header`
	background: linear-gradient(183deg, rgba(0, 59, 255, 0.8) 0%, rgba(17, 44, 196, 0.8) 100%);
	position: relative;
`;

const BlurredText = styled.p`
	color: transparent;
	text-align: center;
	font-size: 370px;
	position: absolute;
	width: 100%;
	top: -292px;
	overflow: hidden;
	text-shadow: 0 0 50px white;
`;

const Container = styled.div`
	max-width: 960px;
	position: relative;
	margin: 0 auto;
`;
const Spacer = styled.div`
	padding-top: 5vh;
`;
const BlockText = styled.article`
	position: relative;
	background: rgb(65, 72, 255);
	background: linear-gradient(179deg, rgba(65, 72, 255, 1) 0%, rgba(6, 40, 199, 1) 100%, rgba(0, 0, 4, 1) 100%);
	color: white;
	padding: 15px 20px 40px 20px;
`;

const H1 = styled.h1`
	font-family: 'Alata', sans-serif;
	font-size: 80px;
	font-weight: bold;
	text-align: center;
	margin: 16px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 3fr;
`;

const With = styled.span`
	font-style: italic;
	font-size: 15px;
	color: #dcdedc;
	opacity: 80%;
`;
const Ul = styled.ul`
	margin: 0;
	padding: 0;
`;

const Li = styled.li`
	list-style: none;
	color: #dcdedc;
	opacity: 80%;
`;

const ContentBackground = styled.section`
	background-image: url(${backdrop});
	background-repeat: no-repeat;
	background-position: bottom right;
	min-height: 60vh;
`;

const MainContent = styled.div`
	background-color: white;
	box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 14%);
	padding: 60px 35px;
`;

const ProfileCardContainer = styled.div`
	position: absolute;
	top: -60px;
	width: 30%;
`;

const EventContainer = styled.div`
	padding: 20px 0px 4px 0px;
`;

const App = () => {
	return (
		<>
			<Header>
				<BlurredText>Creator club.</BlurredText>
				<Spacer>
					<Container>
						<BlockText>
							<H1>Creator club.</H1>
							<Grid>
							<span></span>
								<With>with</With>
								<Ul>
									<Li>Josh Constine</Li>
									<Li>Li Jin</Li>
									<Li>Dave Ambrose</Li>
									<Li>Ian Kar</Li>
									<Li> Mario Gabriele</Li>
								</Ul>
							</Grid>
						</BlockText>
					</Container>
				</Spacer>
			</Header>
			<ContentBackground>
				<Container>
					<MainContent>
						<ProfileCardContainer>
							<ProfileCard></ProfileCard>
						</ProfileCardContainer>
						<EventInfo></EventInfo>
						<hr />
						<EventContainer>
							<EventSummary></EventSummary>
						</EventContainer>
						<HostCard></HostCard>
						<Share></Share>
					</MainContent>
				</Container>
			</ContentBackground>
		</>
	);
};

export default App;
